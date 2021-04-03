<script>
import { onMount } from "svelte";

    import { Row, Col } from "svelte-materialify";
    import { deck } from "../stores/CardStore.js";
    import CMCGraph from "./CMCGraph.svelte"

    deck.subscribe((d) => {
    });
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
</style>

<div>
    <CMCGraph />
</div>
