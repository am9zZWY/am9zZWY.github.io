<script>
	export let repo;
	let languages = [];
	fetch(repo?.languages_url)
		.then(result => result.json())
		.then(json => {
			languages = Object.keys(json).slice(0, 4)
		})
</script>

<div class="card">
    <div class="card-hover card-title">
        <a href={repo.html_url} class="card-link">{ repo.name }</a>
    </div>
    <div class="card-subtitle">
        { repo.full_name }
    </div>
    <div class="card-description">
        { repo.description ?? '' }
    </div>
    <div class="card-lang">
        {#each languages as lang}
            <div class="card-lang-pill">{lang}</div>
        {/each}
    </div>
</div>

<style>
    .card {
        max-width: 300px;
        width: 300px;
        padding: var(--medium-space);
        margin: var(--small-space);
        margin-left: 0;
        background: var(--light-color);
        color: var(--dark-color);
    }

    .card-hover {
        transition: all .2s ease-in-out;
    }

    .card-hover:hover {
        background: var(--primary-color);
        margin-left: var(--tiny-space);
        padding: var(--tiny-space);
        border-radius: var(--border-radius);
    }

    .card-hover:hover > .card-link {
        color: white !important;
    }

    .card-title {
        font-size: var(--font-text);
        margin-top: 5px;
        margin-bottom: 5px;
        display: inline-block;
    }

    .card-title > .card-link {
        text-decoration: none !important;
    }

    .card-subtitle {
        font-size: var(--font-small);
        color: var(--dark-color);
    }

    .card-description {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: var(--font-small);
    }

    .card-lang {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .card-lang-pill {
        background-color: var(--secondary-color);
        color: white;
        border-radius: var(--border-radius);
        display: inline-block;
        padding: 8px;
        margin-right: 5px;
        margin-bottom: 5px;
        font-size: var(--font-small);
    }
</style>