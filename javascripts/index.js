const BACKEND_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function(){
  setupPage();
})

function setupPage(){
  Card.create();
  Menu.render();
}