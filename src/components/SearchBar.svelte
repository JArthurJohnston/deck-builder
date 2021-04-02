<script>
    import { findCard } from "../APIs/ScryfallAPI";
    import { TextField } from "svelte-materialify";

    export let searchText = "Search For Cards...";
    export let onCardFound = () => {};

    let cardQuery;

    const sendQuery = () =>
        findCard(cardQuery).then((foundCard) => {
            // card = foundCard;
            onCardFound(foundCard)
        });

    const handleEnter = (e) => {
        if (cardQuery && e.keyCode === 13) {
            sendQuery();
        }
    };
</script>

<!-- <form> -->
<TextField clearable outlined bind:value={cardQuery} on:keyup={handleEnter}>
    {searchText}
</TextField>
<!-- </form> -->
