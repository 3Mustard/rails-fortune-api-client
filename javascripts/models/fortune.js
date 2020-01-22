class Fortune {
    constructor(id,card1,card2,card3){
        this.id = id;
        this.cards = [card1,card2,card3];
    }

    static renderAll(){
        Menu.clearFortunes();
        fetch(`${BACKEND_URL}/fortunes`)
        .then(response => response.json())
        .then(fortunes => {
          fortunes.forEach(fortune => {
            let card1 = Card.find_by_id(fortune.card_id[0]);
            let card2 = Card.find_by_id(fortune.card_id[1]);
            let card3 = Card.find_by_id(fortune.card_id[2]);
            let id = fortune.id; 
            let newFortune = new Fortune(id,card1,card2,card3);
            newFortune.render();
          });
        });
      }

    static create(){
        let card1 = Card.draw();
        let card2 = Card.draw();
        let card3 = Card.draw();
        let card_ids = [card1["id"],card2["id"],card3["id"]];

        fetch(`${BACKEND_URL}/fortunes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                card_ids: card_ids
            })
        })
        .then(response => response.json())
        .then(fortune => {
            let newFortune = new Fortune(fortune["id"],card1,card2,card3);
            newFortune.render();
        })
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

    render(){
        let container = document.getElementById('fortunes-container');
        
        let card1 = this.cards[0];
        let card2 = this.cards[1];
        let card3 = this.cards[2];

        let fortuneCard = document.createElement('div');
        fortuneCard.classList.add('row');
        fortuneCard.id = this.id;
        fortuneCard.innerHTML = `
            <div id="card-card1" class="col-lg-4">
            <h2>${card1.name}</h2>
            <img src="assets/images/cards/${card1.img}">
            <p>${card1.fortune_telling}</p>
            <h4>Keywords:</h4>
            <p>${card1.keywords}</p>
            </div>
            <div id="card-card2" class="col-lg-4">
            <h2>${card2.name}</h2>
            <img src="assets/images/cards/${card2.img}">
            <p>${card2.fortune_telling}</p>
            <h4>Keywords:</h4>
            <p>${card2.keywords}</p>
            </div>
            <div id="card-card3" class="col-lg-4">
            <h2>${card3.name}</h2>
            <img src="assets/images/cards/${card3.img}">
            <p>${card3.fortune_telling}</p>
            <h4>Keywords:</h4>
            <p>${card3.keywords}</p>
            </div> 
            <btn data-id="${this.id}"class="delete">Remove Fortune</btn>
        `;
        
        container.appendChild(fortuneCard);
        fortuneCard.addEventListener('click', e => {
            if(e.target.className === "delete") this.destroy(e);
        });
    }
}