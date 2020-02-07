const BACKEND_URL = 'http://localhost:3000';
let deck = new Deck();

//Once dom loads invoke setupPage
document.addEventListener('DOMContentLoaded', function(){
  setupPage();
})

//fetches card data and renders menu options to the user
function setupPage(){
  Card.create();
  Menu.render();
}
