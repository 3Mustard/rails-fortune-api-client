class Fortune {
    constructor(id,cards){
        this.id = id;
        this.cards = cards.map((card) => card)
    }

    static create(e){
        let numberOfCards = parseInt(e.target.dataset.cardAmount, 10);
        let cards = Fortune.assignCards(numberOfCards);
        let ids = cards.map((card) => card.id );

        fetch(`${BACKEND_URL}/fortunes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                card_ids: ids
            })
        })
        .then(response => response.json())
        .then(fortune => {
            let newFortune = new Fortune(fortune["id"],cards);
            newFortune.render();
        })
    }

    static assignCards(numberOfCards){
        let cards = [];
        for (let i = 0; i < numberOfCards; i++){
            cards.push(Card.draw());
        }
        Fortune.checkForDuplicateCards(cards,numberOfCards);
        return cards
    }

    static checkForDuplicateCards(cardArr,numberOfCards){
        let cards = [];
        let result = [];

        cardArr.forEach(function (card) {
          if(!cards.includes(card)){
            cards.push(card);
          }else{
            result.push(card);
          }
        })
    
        if (result.length > 0){
            Fortune.assignCards(numberOfCards); 
        } 
    }

    static renderAll(){
        Menu.clearFortunes();
        fetch(`${BACKEND_URL}/fortunes`)
        .then(response => response.json())
        .then(fortunes => {
          fortunes.forEach(fortune => {
            let cards = fortune.card_id.map((id) => Card.find_by_id(id) );
            let id = fortune.id; 
            let newFortune = new Fortune(id,cards);
            newFortune.render();
          });
        });
    }

    render(){
        let container = document.getElementById('fortunes-container');
        let fortuneCard = document.createElement('div');
            fortuneCard.classList.add('row');
            fortuneCard.id = this.id;

        let numberOfCards = this.cards.length;
        for(let i = 0; i < numberOfCards; i++){
            fortuneCard.innerHTML += `
                <div id="card-card1" class="col-lg-4">
                <h2>${this.cards[i].name}</h2>
                <img src="assets/images/cards/${this.cards[i].img}">
                <p>${this.cards[i].fortune_telling.join(" ")}</p>
                <h4>Keywords:</h4>
                <p>${this.cards[i].keywords.join(" ")}</p>
                </div>
            `;
        }
        fortuneCard.innerHTML += `<btn data-id="${this.id}"class="delete">Remove Fortune</btn>`;

        container.prepend(fortuneCard);
        fortuneCard.addEventListener('click', e => {
            if(e.target.className === "delete") this.destroy(e);
        }); 
    }

    destroy(e){
        const id = e.target.dataset.id;

        fetch(`${BACKEND_URL}/fortunes/${id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(()=>{
            e.target.parentElement.remove();
        })
    }
}