<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let excludedLanguages = ['', 'CSS'];
	export let githubName = 'jpkmiller';

	let fetchedRepos = [];
	fetch(`https://api.github.com/users/${githubName}/repos`, {
			method: 'GET',
			headers: {
				Authorization: 'token ' + 'GITHUB_TOKEN'
			}
		}
	)
		.then((response) => response.json())
		.then((repos) =>
			fetchedRepos = repos
				.filter(({
							 archived,
							 language
						 }) => !archived && language !== null && !excludedLanguages.includes(language))
				.map(({name, full_name, description, html_url}) => ({
					fullName: full_name,
					name: name,
					description: description,
					url: html_url
				}))
		)
</script>

<div>
    {#each fetchedRepos as repo }
        <ProjectCard {...repo}/>
    {/each}
</div>
