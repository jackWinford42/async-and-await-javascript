const deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/";
async function get_deck_ID() {
    deck = await axios.get(deckURL);
    return deck.data.deck_id;
}

$('button').on('click', async function() {
    deckID = await get_deck_ID();
    card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
    $('#deck_home').append(`<img src="${card.data.cards[0].image}" alt="image drawn card"></img>`);
});