import { writable } from "svelte/store";

export const cards = writable([])
export const deck = writable({
    commander: undefined,
    cards: []
});

export function setCommander(card){
    deck.update({
        
    })
}