<script>
    import { Button, Icon } from "svelte-materialify";
    import { mdiAnimationPlay } from "@mdi/js";
    import CardView from "./CardView.svelte";
    import { deck } from "../stores/CardStore";
    export let card;

    let myDeck;
    deck.subscribe((d) => (myDeck = d));

    function addCard(card) {
        if(myDeck.cards.filter(e => e.id === card.id).length <= 0){
            const cards = [...myDeck.cards, card];
            deck.update((d) => (d = { ...d, cards }));
        }
    }
</script>

{#if card}
    <CardView {card} size="small" />
    <Button on:click={() => addCard(card)}>
        <Icon path={mdiAnimationPlay} />
    </Button>
{/if}
