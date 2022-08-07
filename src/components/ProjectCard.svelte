<script>
    export let fullName;
    export let name;
    export let description;
    export let url;
</script>

<div class="card">
    <div class="card-title">
        <a href={url}>{ name }</a>
    </div>
    <div class="card-subtitle">
        { fullName }
    </div>
    {#if description !== null}
        <div class="card-description">
            { description }
        </div>
    {/if}
</div>

<style>
    .card {
        max-width: 300px;
        width: 300px;
        padding: var(--medium-space);
        margin: var(--small-space);
        margin-left: 0;
        background: var(--light-color);
        color: black;
    }

    .card-title {
        font-size: var(--font-text);
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card-subtitle {
        font-size: var(--font-small);
        color: black;
    }

    .card-description {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: var(--font-small);
    }
</style>