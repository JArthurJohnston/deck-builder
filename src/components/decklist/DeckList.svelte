<script>
    import { List, ListItem, Divider, Icon, Dialog } from "svelte-materialify";
    import CardView from "../CardView.svelte";
    import DownloadButton from "../DownloadButton.svelte";
    import CommanderListItem from "./CommanderListItem.svelte";
    import { deck } from "../../stores/CardStore";
    import CardListItem from "./CardListItem.svelte";
import EditCardDialog from "../EditCardDialog.svelte";

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
                <CardListItem
                    card={eachCard}
                    onClick={() => openCard(eachCard)}
                    onRemove={() => removeCard(eachCard)} />
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
    <EditCardDialog card={selectedCard}/>
</Dialog>
