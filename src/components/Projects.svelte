<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let excludedLanguages = ['', 'CSS'];

	let fetchedRepos = [];
	fetch('https://api.github.com/users/am9zZWY/repos', {
			method: 'GET',
			headers: {
				Accept: 'application/vnd.github.v3+json',
				Authorization: 'token SECRET'
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
