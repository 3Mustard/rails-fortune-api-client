const BACKEND_URL = 'http://localhost:3000';
let deck = new Deck();

document.addEventListener('DOMContentLoaded', function(){
  setupPage();
})

function setupPage(){
  Card.create();
  Menu.render();
}
