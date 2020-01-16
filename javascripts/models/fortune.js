class Fortune {
    constructor(id){
        let card1 = Card.drawCard();
        let card2 = Card.drawCard();
        let card3 = Card.drawCard();

        this.id = id;
        this.cards = [card1,card2,card3];
        this.card_id = [card1["id"],card2["id"],card3["id"]]
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
            <p>${card1.name}</p>
            <p>${card2.name}</p>
            <p>${card3.name}</p>
        `;
        
        container.appendChild(fortuneCard);
        fortuneCard.appendChild(cardDiv);
    }
}