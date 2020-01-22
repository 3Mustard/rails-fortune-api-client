class Menu {
    static render(){
      const options = document.getElementById("options");
          
      let newFortune = document.createElement("btn");
      newFortune.innerHTML = "New Fortune"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.addEventListener('click',Fortune.create);
          
      let viewFortunes = document.createElement("btn");
      viewFortunes.innerHTML = "View Fortune"
      viewFortunes.id = "view-fortunes"
      viewFortunes.classList = "navBtns"
      viewFortunes.addEventListener('click',Fortune.renderAll);
          
      options.appendChild(newFortune);
      options.appendChild(viewFortunes);
    }
    
    static clearFortunes(){
      let fortunes = document.getElementById("fortunes-container");
      fortunes.innerHTML = "";
    }

}