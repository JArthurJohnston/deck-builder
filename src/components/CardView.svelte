<script>
    import { onMount } from "svelte";

    export let card;
    export let size = "normal";
    import { ProgressCircular } from "svelte-materialify";

    let showImage = false;
    onMount(async () => {
        const pic = new Image();
        pic.onload = () => {
            showImage = true;
        };
        pic.src = card.image_uris[size];
        pic.alt = card.name;
        document.getElementById("card-pic").appendChild(pic);
    });
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        padding: 1em;
    }
</style>

<div id="card-pic">
    {#if !showImage}
        <ProgressCircular indeterminate color="success"/>
    {/if}
</div>
