<script>
    import { Row, Col } from "svelte-materialify";
    import { deck } from "../stores/CardStore.js";
    import CMCGraph from "./charts/CMCGraph.svelte";
    import TypesPieChart from "./charts/TypesPieChart.svelte";
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 97vh;
        overflow-y: scroll;
    }
</style>

<div>
    <TypesPieChart size={300} />
    <CMCGraph />
</div>
