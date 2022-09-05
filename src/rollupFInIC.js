"use strict";
/* jshint esversion: 11 */
import {attachScopes, createFilter} from '@rollup/pluginutils';
import {walk} from 'estree-walker';

function updateVariableMap(node, varMap) {
	if (varMap === null) {
		varMap = {};
	}

	if (node.type === 'AssignmentPattern' && node.left.type === 'Identifier') {
		varMap[node.left.name] = node.right.value;
	}
}

async function replaceFetch(node, code, variableMap) {
	let replacedCode = code;

	/* find fetch expression */
	if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'fetch') {
		const start = node.start;
		const end = node.end;

		replacedCode = await replacedCode;

		/* extract fetch from code */
		const fetchAsString = replacedCode.substring(start, end);
		let fetchAsStringFlatten = fetchAsString.replace(/\r\n|\n|\r/gm, '');
		const fetchUrl = node.arguments[0];
		if (fetchUrl.type === 'TemplateLiteral' && 0 < fetchUrl.expressions?.length) {
			fetchUrl.expressions.forEach(identifier => {
				fetchAsStringFlatten = fetchAsStringFlatten.replace(`$\{${identifier.name}\}`, variableMap[identifier.name]);
			});
		}

		/* call fetch */
		const response = await eval(fetchAsStringFlatten);
		const type = response.headers.get("content-type");

		if (type.includes('json')) {
			const json = await response.json();
			const jsonString = JSON.stringify(json);
			replacedCode = replacedCode.replace(`${fetchAsString}`, `new Promise((resolve) => { resolve(new Response('${jsonString}')) } )`);
		}
	}
	return replacedCode;
}


export function fetchinJect(options = {}) {
	const filter = createFilter(options.include,
		options.exclude || ['node_modules/**', 'rollupFetchinJect.js'],
	);

	options.global = true !== options.global && false !== options.global ? true : options.global;

	return {
		name: 'fetchinJect',
		transform(code, id) {
			if (!filter(id)) {
				return null;
			}

			let ast = null;
			try {
				ast = this.parse(code);
			} catch (err) {
				this.warn({
					code: 'PARSE_ERROR',
					message: `rollup-plugin-finic: failed to parse ${id}.`
				});
			}
			if (!ast) {
				return null;
			}

			let scope = attachScopes(ast, 'scope');
			let replacedCode = code;
			const varMap = {};

			walk(ast, {
				enter(node, parent) {
					if (node.scope) {
						scope = node.scope; // eslint-disable-line prefer-destructuring
					}

					updateVariableMap(node, varMap);
					replacedCode = replaceFetch(node, replacedCode, varMap);
				},
				leave(node) {
					if (node.scope) {
						scope = scope.parent;
					}
				}
			});

			return {
				code: replacedCode,
				map: {mappings: ''}
			};
		}
	};
}