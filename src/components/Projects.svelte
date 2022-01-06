<script>
    import ProjectCard from "./ProjectCard.svelte";

    let fetchedRepos = [];
    fetch('https://api.github.com/users/jpkmiller/repos')
        .then((response) => response.json())
        .then((repos) =>
                fetchedRepos = repos.filter(({archived}) => !archived).map(({name, full_name, description, html_url}) => {
                return {
                    fullName: full_name,
                    name: name,
                    description: description,
                    url: html_url
                }
            })
        )
</script>

<div>
    {#each fetchedRepos as repo }
        <ProjectCard {...repo} />
    {/each}
</div>
