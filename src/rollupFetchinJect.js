"use strict";
/* jshint esversion: 11 */
import {createFilter} from '@rollup/pluginutils';

function findFetchInCode(code) {
	const matchIndexes = Array.from(code.matchAll(/fetch\(/g)).map(m => m.index);
	if (matchIndexes.length === 0) {
		return [];
	}

	const variableMap = Array.from(code.matchAll(/(?:let|var|const)\s+((?<name1>[^= ]+)\s+=\s+(?<value1>[^;]+)|{\s+(?<name2>[^= ]+)\s+=\s+(?<value2>[^;]+)\s+})/g)).reduce((acc, match) => {
		const groups = match.groups;
		if ("undefined" === typeof groups.name1) {
			return {
				...acc,
				[groups.name2]: groups.value2
			};
		} else {
			return {
				...acc,
				[groups.name1]: groups.value1
			};
		}
	}, {});

	const stringFetches = [];
	for (let i of matchIndexes) {
		let fetchCommand = 'fetch';
		let countParentheses = 0;
		let j = i + 5;
		while (j < code.length) {
			const token = code[j];
			if ('(' === token) {
				countParentheses++;
			}
			if (0 === countParentheses) {
				stringFetches.push(fetchCommand);
				break;
			}
			if (')' === token) {
				countParentheses--;
			}
			fetchCommand += token;
			j++;
		}
	}

	const fetches = [];
	stringFetches
		.forEach(fetch => {
			const fetched = {};
			fetched.original = fetch;

			let url = fetch.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '');
			const varsUsedInFetch = Array.from(url.matchAll(/\${(?<conc>[^}]+)}|'\s*\+\s*(?<interpol>[^']+)\s*\+\s*'/g)).map(m => m.groups.conc ?? m.groups.interpol).map(v => v.trim());
			varsUsedInFetch.forEach(v => {
				if (typeof variableMap[v] !== "undefined") {
					url = url.replace(new RegExp(`\\${v}`, 'g'), variableMap[v]);
				}
			});
			fetched.url = url;
			fetches.push(fetched);
		});
	return fetches;
}

/*
	This is a plugin that will fetch the file from the server and replace the code with the fetched file.
	This is useful for fetching files from the server and replacing the code with the fetched file.

	The regex works the following way:

	fetch('http://foo.bar/baz.js', {method: 'GET'}).then(foobar)

	will be replaced with:

	new Promise((resolve) => { resolve(new Response('<contentOfFooBar>')) }).then(foobar)
 */
async function fetchAndInject(code) {
	const fetches = findFetchInCode(code);
	if (0 === fetches.length) {
		return code;
	}

	for (const fetched of fetches) {
		const response = await eval(fetched.url);
		const type = response.headers.get("content-type");
		if (type.includes('json')) {
			const json = await response.json();
			const jsonString = JSON.stringify(json);
			code = code.replace(`${fetched.original}`, `new Promise((resolve) => { resolve(new Response('${jsonString}')) } )`);
		}
	}
	return code;
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

			return {
				code: fetchAndInject(code),
				map: {mappings: ''}
			};
		}
	};
}