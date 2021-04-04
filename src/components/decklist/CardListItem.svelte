<script>
    import { ListItem, Icon } from "svelte-materialify";
    import { mdiCancel } from "@mdi/js";
    import DecklistCardIcon from "../DecklistCardIcon.svelte";

    export let card;
    export let onClick;
    export let onRemove;
</script>

<ListItem on:click={onClick}>
    <span slot="prepend">
        <DecklistCardIcon card={card} />
    </span>
    {card.name}
    <span slot="append" on:click={onRemove}>
        <Icon path={mdiCancel} />
    </span>
</ListItem>
