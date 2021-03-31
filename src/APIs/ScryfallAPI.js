import Axios from "axios"


const GET_CARD_NAMED_URL = "https://api.scryfall.com/cards/named?fuzzy="

export function findCard(cardName) {
    return Axios.get(`${GET_CARD_NAMED_URL}${cardName}`)
}
