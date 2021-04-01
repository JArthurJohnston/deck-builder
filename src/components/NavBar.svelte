<script>
    import {
        NavigationDrawer,
        ListItem,
        Overlay,
        Button,
        Icon,
    } from "svelte-materialify";
    import SearchBar from "./SearchBar.svelte";
    import { mdiFeatureSearchOutline } from "@mdi/js";

    let active = false;
    function open() {
        active = true;
    }
    function close() {
        active = false;
    }
</script>

<style>
</style>

<Overlay {active} index={1} on:click={close} />
<NavigationDrawer absolute {active}>
    <ListItem>
        <SearchBar />
    </ListItem>
</NavigationDrawer>
<Button fab class="blue white-text" on:click={open}>
    <Icon path={mdiFeatureSearchOutline} />
</Button>
