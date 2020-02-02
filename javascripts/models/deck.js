//act's as a repository for instances of Card objects
class Deck {
    constructor(){
        this.cards = [] //stores card objects
    }
    
    //add card object to a deck
    add(card){
        this.cards.push(card);
    }
    
    //return a card with a given id
    get(id){
        let index = id - 1;
        return this.cards[index]
    }
    
    //return a random card object from a 78 card deck
    draw(){
        let cardNumber = Math.round(Math.random() * 77);
        return this.cards[cardNumber];
    }
}
