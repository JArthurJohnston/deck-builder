<script>
    import { ListItem, Icon } from "svelte-materialify";
    import CommanderSearch from "./CommanderSearch.svelte";
    import { mdiSquareEditOutline, mdiChessRook } from "@mdi/js";

    export let commander;
    let openComSearch = commander === undefined;

    function setCommander(c) {
        commander = c;
        openComSearch = false;
    }

</script>

{#if commander}
    <ListItem>
        <span slot="prepend">
            <Icon path={mdiChessRook} />
        </span>
        {`${commander.name}`}
        <span slot="append" on:click={() => (openComSearch = true)}>
            <Icon path={mdiSquareEditOutline} />
        </span>
    </ListItem>
{:else}
    <CommanderSearch
        active={openComSearch}
        onCommanderFound={setCommander} />
{/if}
