<script>
    import { findCard } from "../APIs/ScryfallAPI";
    import { TextField } from "svelte-materialify";
    let cardQuery;
    let card;

    const sendQuery = () =>
        findCard(cardQuery).then((r) => {
            console.log(r);
            card = r.data;
        });

    const handleEnter = (e) => {
        if (cardQuery && e.keyCode === 13) {
            sendQuery();
        }
    };
</script>

<!-- <form> -->
<TextField clearable outlined bind:value={cardQuery} on:keyup={handleEnter}>
    Search For Cards...
</TextField>
<!-- </form> -->

{#if card}
    <img src={card.image_uris.normal} alt={card.name} />
{/if}
<p>Powered by Scryfall</p>

<style>
    p {
        float: right;
    }
</style>
