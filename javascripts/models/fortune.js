//A fortune object represents a number of random card objects and has methods for rendering,creating, and deleting them from fortune-api
class Fortune {
    constructor(id,cards){
        this.id = id;
        this.cards = cards.map((card) => card)
    }
    
    //Uses an event listener to create and render fortune objects.
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

    //takes in an integer X and returns an array of X card objects after calling checkForDuplicateCards.
    static assignCards(numberOfCards){
        let cards = [];
        for (let i = 0; i < numberOfCards; i++){
            cards.push(deck.draw());
        }
        Fortune.checkForDuplicateCards(cards);
        return cards
    }

    //takes in an array of cards and checks if any items are equal. If any are equal then assignCards is called.
    static checkForDuplicateCards(cardArr){
        let numberOfCards = cardArr.length;
        let cards = [];
        let result = [];

        cardArr.forEach((card) => {
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

    //clears the DOM of any fortunes, fetches all fortunes from DB and calls render on each of them.
    static renderAll(){
        Menu.clearFortunes();
        fetch(`${BACKEND_URL}/fortunes`)
        .then(response => response.json())
        .then(fortunes => {
          fortunes.forEach(fortune => {
            let cards = fortune.card_id.map((id) => deck.get(id) );
            let id = fortune.id; 
            let newFortune = new Fortune(id,cards);
            newFortune.render();
          });
        });
    }
    
    //renders a fortune container with the apporpriate amount of card divs
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

    //destroys the fortune from DB and DOM based on id passed though an event listener.
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
