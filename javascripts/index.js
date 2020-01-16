const BACKEND_URL = 'http://localhost:3000';
let ALLCARDS = [];

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

function viewFortunes(){

}

function newFortune(){

}

function deleteFortune(){

}

function createNote(){

}

function deleteNote(){

}

function editNote(){

}