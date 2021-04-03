<script>
    import { onMount } from "svelte";

    import { Row, Col } from "svelte-materialify";
    import { deck } from "../../stores/CardStore.js";

    let manaValues = [];
    const cmcBins = {};
    let graph = document.createElement("div");
    deck.subscribe((d) => {
        manaValues = d.cards.map((e) => e.cmc).sort();
        manaValues.forEach((e) => {
            if (cmcBins[e]) {
                cmcBins[e] = cmcBins[e] + 1;
            } else {
                cmcBins[e] = 1;
            }
        });

        const data = Object.keys(cmcBins).map((e) => {
            return { name: e, value: cmcBins[e] };
        });

        graph = createGraph(data);
    });

    // function createBarChart() {
    //     var svg = d3.select("svg"),
    //         margin = 200,
    //         width = svg.attr("width") - margin,
    //         height = svg.attr("height") - margin;

    //     var xScale = d3.scaleBand().range([0, width]).padding(0.4),
    //         yScale = d3.scaleLinear().range([height, 0]);

    //     var g = svg
    //         .append("g")
    //         .attr("transform", "translate(" + 100 + "," + 100 + ")");
    // }

    function createGraph(data) {
        // const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

        // svg.append("g")
        //     .attr("fill", color)
        //     .selectAll("rect")
        //     .data(data)
        //     .join("rect")
        //     .attr("x", (d, i) => x(i))
        //     .attr("y", (d) => y(d.value))
        //     .attr("height", (d) => y(0) - y(d.value))
        //     .attr("width", x.bandwidth());

        // svg.append("g").call(xAxis);

        // svg.append("g").call(yAxis);

        // return svg.node();
    }

    onMount(async () => {
        // document.getElementById("cmc-graph").appendChild(graph);
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
    <div id="cmc-graph" />
    <svg width="600" height="500" />
</div>
