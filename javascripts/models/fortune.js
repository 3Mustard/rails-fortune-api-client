let ALLFORTUNES = [];

class Fortune {
    constructor(id,card1,card2,card3){
        this.cards = [card1,card2,card3];
        this.card_id = [card1["id"],card2["id"],card3["id"]]
        this.id = id
        ALLFORTUNES.push(this)
    }
    static all(){
        return ALLFORTUNES;
    }

    static create(){
        let card1 = Card.drawCard();
        let card2 = Card.drawCard();
        let card3 = Card.drawCard();
        let card_ids = [card1["id"],card2["id"],card3["id"]]

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
        const id = e.target.dataset.id

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

    static renderAllFortunes(){
        const fortunes = Fortune.all();
      
        if(fortunes.length > 0){
          fortunes.forEach(fortune => fortune.render());
        }
      }

    render(){
        let container = document.getElementById('fortunes-container');
        
        let card1 = this.cards[0];
        let card2 = this.cards[1];
        let card3 = this.cards[2];

        let fortuneCard = document.createElement('div');
        fortuneCard.classList.add('fortune-card');
        fortuneCard.id = this.id;
        fortuneCard.innerHTML = `
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
            <btn data-id="${this.id}"class="delete">Remove Fortune</btn>
        `;
        
        container.appendChild(fortuneCard);
        fortuneCard.addEventListener('click', e => {
            if(e.target.className === "delete") this.destroy(e)
        })
    }
}