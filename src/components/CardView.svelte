<script>
    export let card;
    export let size = "normal";
    import { ProgressLinear } from "svelte-materialify";

    let showLoading = true;
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        padding: 1em;
        flex-direction: column;
        align-items: center;
    }
</style>

<div id="card-pic">
    {#if showLoading}
        <ProgressLinear indeterminate color="success" />
    {/if}
    <img
        src={card.image_uris[size]}
        alt={card.name}
        on:load={() => (showLoading = false)} />
</div>
