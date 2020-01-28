class Deck {
    constructor(){
        this.cards = []
    }

    add(card){
        this.cards.push(card);
    }

    get(id){
        let index = id - 1;
        return this.cards[index]
    }

    draw(){
        let cardNumber = Math.round(Math.random() * 77);
        return this.cards[cardNumber];
    }
}

let deck = new Deck();