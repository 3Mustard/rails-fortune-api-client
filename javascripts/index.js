const BACKEND_URL = 'http://localhost:3000';
let ALLCARDS = [];

async function fetchJson(extension){
  const response = await fetch(`${BACKEND_URL}/${extension}`);
  const json = await response.json();
  return await json;
}

function createCards(){
  
  cards = fetchJson("cards");
  cards.forEach( card => console.log(card));
  //for each statement
  //push to allCards array

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