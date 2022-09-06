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
		)
</script>

<div class="projects">
    {#each fetchedRepos as repo }
        <ProjectCard repo={repo}/>
    {/each}
</div>

<style>
    .projects {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>