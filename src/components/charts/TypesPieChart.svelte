<script>
    import { onMount } from "svelte";

    import { deck } from "../../stores/CardStore.js";
    import { build } from "./PieChart";

    export let size = 300;

    const types = {
        artifacts: 0,
        creatures: 0,
        spells: 0,
        lands: 0,
        enchantments: 0,
        planeswalkers: 0,
        other: 0,
    };

    function typeData() {
        return [
            { name: "Artifacts", value: types.artifacts },
            { name: "Creatures", value: types.creatures },
            { name: "Spells", value: types.spells },
            { name: "Lands", value: types.lands },
            { name: "Enchantments", value: types.enchantments },
            { name: "Planeswalker", value: types.planeswalkers },
            // { name: "Other", value: types.other },
        ];
    }

    deck.subscribe((d) => {
        d.cards.forEach((e) => {
            if (e.type_line.includes("Creature")) {
                types.creatures = types.creatures + 1;
            } else if (e.type_line.includes("Land")) {
                types.lands = types.lands + 1;
            } else if (e.type_line.includes("Enchantment")) {
                types.enchantments = types.enchantments + 1;
            } else if (e.type_line.includes("Artifact")) {
                types.artifacts = types.artifacts + 1;
            } else if (e.type_line.includes("Planeswalker")) {
                types.planeswalkers = types.planeswalkers + 1;
            } else if (
                e.type_line.includes("Instant") ||
                e.type_line.includes("Sorcery")
            ) {
                types.spells = types.spells + 1;
            } else {
                types.other = types.other + 1;
                console.log("Type not found for:", e.name);
            }
        });
    });

    onMount(async () => {
        build(typeData(), size, "types-pie");
    });
</script>

<style>
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
</style>

<span>
    <svg id="types-pie" width={size} height={size} />
</span>
