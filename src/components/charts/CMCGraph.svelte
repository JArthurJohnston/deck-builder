<script>
    import { afterUpdate, onMount } from "svelte";

    import { deck } from "../../stores/CardStore.js";
    import { build } from "./BarChart";
    import { isNotLand } from "../../helpers/CardSelectors";

    export let width = 400;
    export let height = 200;

    let data = [];

    deck.subscribe((d) => {
        const cmcBins = {};
        d.cards
            .filter(isNotLand)
            .map((e) => e.cmc)
            .sort()
            .forEach((e) => {
                if (cmcBins[e]) {
                    cmcBins[e] = cmcBins[e] + 1;
                } else {
                    cmcBins[e] = 1;
                }
            });

        data = Object.keys(cmcBins).map((e) => {
            return { name: e, value: cmcBins[e] };
        });

        // try {
        //     build("cmc-graph", data);
        // } catch (error) {}
    });

    onMount(async () => {
        build("cmc-graph", data);
    });

    afterUpdate(async () => build("cmc-graph", data))
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

<div><canvas id="cmc-graph" {width} {height} /></div>
