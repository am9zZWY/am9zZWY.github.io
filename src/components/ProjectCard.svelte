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
        padding: 10px;
        max-width: 300px;
        width: 300px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        background: var(--light-color);
        color: black;
    }

    .card-title {
        font-size: x-large;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card-subtitle {
        font-size: medium;
        color: black;
    }

    .card-description {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: medium;
    }
</style>