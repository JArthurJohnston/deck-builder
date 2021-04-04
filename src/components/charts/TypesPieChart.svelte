<script>
    import { onMount } from "svelte";

    import * as Helpers from "../../helpers/CardSelectors";
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
            if (Helpers.isCreature(e)) {
                types.creatures = types.creatures + 1;
            } else if (Helpers.isLand(e)) {
                types.lands = types.lands + 1;
            } else if (Helpers.isEnchantment(e)) {
                types.enchantments = types.enchantments + 1;
            } else if (Helpers.isArtifact(e)) {
                types.artifacts = types.artifacts + 1;
            } else if (Helpers.isPlaneswalker(e)) {
                types.planeswalkers = types.planeswalkers + 1;
            } else if (Helpers.isSpell(e)) {
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

<span> <svg id="types-pie" width={size} height={size} /> </span>
