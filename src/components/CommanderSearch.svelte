<script>
    import { Dialog } from "svelte-materialify";
    import SearchBar from "./SearchBar.svelte";
    import { deck } from "../stores/CardStore";

    export let active = false;
    export let onCommanderFound = ()=> {};

    deck.subscribe((d) => {
        if (!d.commander) {
            active = true;
        }
    });

    function setCommander(card) {
        deck.update(d => d = { ...d, commander: card });
        onCommanderFound(card)
        active = false;
    }
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>

<Dialog persistent bind:active>
    <div>
        <p>Please Choose a Commander</p>
        <SearchBar onCardFound={setCommander} />
    </div>
</Dialog>
