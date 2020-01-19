const BACKEND_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function(){
  setupPage();
})

function setupPage(){
  Card.createCards();
  options();
  Fortune.renderAllFortunes();
}

function options(){
  const options = document.getElementById("options");

  let newFortune = document.createElement("btn");
  newFortune.innerHTML = "New Fortune"
  newFortune.id = "new-fortune"
  newFortune.addEventListener('click',Fortune.create);

  options.appendChild(newFortune);
}

function clearPage(){

}