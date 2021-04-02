import { writable } from "svelte/store";

export const cards = writable([])
export const deck = writable({
    commander: undefined,
    cards: []
});

const storedDeck = localStorage.getItem("DECK")
if(storedDeck){
    deck.update(d => d = JSON.parse(storedDeck))
}

deck.subscribe(d => {
    if(d){
        localStorage.setItem("DECK", JSON.stringify(d))
    }
})