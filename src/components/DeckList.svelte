<script>
    import { deck } from "../stores/CardStore";
    import { List, ListItem, Divider, Icon, Dialog } from "svelte-materialify";
    import { mdiCancel } from "@mdi/js";
    import DecklistCardIcon from "./DecklistCardIcon.svelte";
    import CardView from "./CardView.svelte";
    import DownloadButton from "./DownloadButton.svelte";
    import CommanderListItem from "./CommanderListItem.svelte";

    let myDeck;
    let myCards;
    deck.subscribe((d) => {
        myDeck = d;
        myCards = d.cards;
    });

    let active = false;
    let selectedCard;

    function openCard(card) {
        selectedCard = card;
        active = true;
    }

    function removeCard(card) {
        const cards = myDeck.cards.filter((c) => c.id !== card.id);
        deck.update((d) => (d = { ...d, cards }));
    }
</script>

<style>
    div {
        overflow-y: scroll;
        height: 80vh;
    }
</style>

<List dense>
    <ListItem>Deck List</ListItem>
    <Divider />
    {#if myDeck}
        <CommanderListItem commander={myDeck.commander} />
        <Divider />
        <div>
            {#each myCards as eachCard}
                <ListItem on:click={() => openCard(eachCard)}>
                    <span slot="prepend">
                        <DecklistCardIcon card={eachCard} />
                    </span>
                    {eachCard.name}
                    <span slot="append" on:click={() => removeCard(eachCard)}>
                        <Icon path={mdiCancel} />
                    </span>
                </ListItem>
            {/each}
        </div>
        <Divider />
        <ListItem>
            {`Total ${myCards.length}`}
            <span slot="append">
                <DownloadButton
                    data="{JSON.stringify(myCards, null, 2)},"
                    filename="cards.json"
                    type="json" />
            </span>
        </ListItem>
    {/if}
</List>

<Dialog bind:active>
    <CardView card={selectedCard} />
</Dialog>
