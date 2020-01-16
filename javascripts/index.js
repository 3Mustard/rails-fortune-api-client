const BACKEND_URL = 'http://localhost:3000';

//fetches card data and turns each card into a js Card class.
function createCards(){
  fetch(`${BACKEND_URL}/cards`)
  .then(response => response.json())
  .then(cards => {
    cards.forEach(card => {
      const {id,name,arcana,suit,img,fortune_telling,keywords,meaning_face_up,meaning_face_down,questions_to_ask} = card;
      const newCard = new Card(id,name,arcana,suit,img,fortune_telling,keywords,meaning_face_up,meaning_face_down,questions_to_ask);
      ALLCARDS.push(newCard);
    });
  });
}

function setupHomePage(){
  //new fortune button
  //view fortunes button
}

function viewFortunes(){
  //load all fortunes
}

function newFortune(){
  //create new fortune object and save to database
}

function deleteFortune(){
  //destroy fortune object
}

function createNote(){

}

function deleteNote(){

}

function editNote(){

}