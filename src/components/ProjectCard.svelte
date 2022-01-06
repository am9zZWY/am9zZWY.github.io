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
        border-radius: 10px;
        border-width: 1px;
        border-color: #333333;
        border-style: solid;
        padding: 10px;
        width: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .card-title {
        font-size: x-large;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card-subtitle {
        font-size: medium;
        color: lightgray;
    }

    .card-description {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: medium;
    }
</style>