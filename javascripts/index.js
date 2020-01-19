const BACKEND_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function(){
  setupPage();
})

function setupPage(){
  Card.create();
  options();
}

function options(){
  const options = document.getElementById("options");

  let newFortune = document.createElement("btn");
  newFortune.innerHTML = "New Fortune"
  newFortune.id = "new-fortune"
  newFortune.addEventListener('click',Fortune.create);

  let viewFortunes = document.createElement("btn");
  viewFortunes.innerHTML = "View Fortune"
  viewFortunes.id = "view-fortunes"
  viewFortunes.addEventListener('click',Fortune.renderAll);

  options.appendChild(newFortune);
  options.appendChild(viewFortunes);
}