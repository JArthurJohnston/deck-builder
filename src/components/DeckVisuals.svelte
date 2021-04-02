<script>
import { onMount } from "svelte";

    import { Row, Col } from "svelte-materialify";
    import { deck } from "../stores/CardStore.js";

    let manaValues = [];
    let graph = document.createElement("div")
    deck.subscribe((d) => {

        manaValues = d.cards.map((e) => e.cmc).sort();
        graph = createGraph()
    });

    function createGraph() {
        const div = d3
            .create("div")
            .style("font", "10px sans-serif")
            .style("text-align", "right")
            .style("color", "white");

        div.selectAll("div")
            .data(manaValues)
            .join("div")
            .style("background", "steelblue")
            .style("padding", "3px")
            .style("margin", "1px")
            .style("width", (d) => `${d * 10}px`)
            .text((d) => d);

        return div.node();
    }

    onMount(async () => {
        document.getElementById("cmc-graph").appendChild(graph)
    })
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
    <div id="cmc-graph" />
</div>
