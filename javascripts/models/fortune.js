let ALLFORTUNES = [];

class Fortune {
    constructor(){
        let card1 = Card.drawCard();
        let card2 = Card.drawCard();
        let card3 = Card.drawCard();

        this.cards = [card1,card2,card3];
        this.card_id = [card1["id"],card2["id"],card3["id"]]
        this.id = ALLFORTUNES.length;
        ALLFORTUNES.push(this)
    }

    render(){
        let container = document.getElementById('fortunes-container');
        let fortuneCard = document.createElement('div');

        fortuneCard.classList.add('fortune-card');
        fortuneCard.id = this.id;

        let card1 = this.cards[0];
        let card2 = this.cards[1];
        let card3 = this.cards[2];

        let cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
            <h2>${card1.name}</h2>
            <img src="assets/images/cards/${card1.img}">
            <p>${card1.fortune_telling}</p>
            <p>${card1.keywords}</p>
            <h2>${card2.name}</h2>
            <img src="assets/images/cards/${card2.img}">
            <p>${card2.fortune_telling}</p>
            <p>${card2.keywords}</p>
            <h2>${card3.name}</h2>
            <img src="assets/images/cards/${card3.img}">
            <p>${card3.fortune_telling}</p>
            <p>${card3.keywords}</p>
        `;
        
        container.appendChild(fortuneCard);
        fortuneCard.appendChild(cardDiv);
    }
}