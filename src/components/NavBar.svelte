<script>
    import {
        NavigationDrawer,
        ListItem,
        Overlay,
        Button,
        Icon,
    } from "svelte-materialify";
    import SearchBar from "./SearchBar.svelte";
    import AddCardButton from "./AddCardButton.svelte";
    import { mdiFeatureSearchOutline } from "@mdi/js";
    let card;
    let active = false;
    function open() {
        active = true;
    }
    function close() {
        active = false;
    }
</script>

<Overlay {active} index={1} on:click={close} />
<NavigationDrawer absolute {active}>
    <ListItem>
        <SearchBar onCardFound={(c) => (card = c)} />
    </ListItem>
    <ListItem>
        <AddCardButton {card} />
    </ListItem>
</NavigationDrawer>
<div>
    <Button fab class="blue white-text" on:click={open}>
        <Icon path={mdiFeatureSearchOutline} />
    </Button>
</div>

<style>
    div {
        position: absolute;
    }
</style>