class Menu {
    static render(){
      Menu.renderThreeCardBtn();
      Menu.renderSingleCardBtn();
      Menu.renderViewFortunesBtn();
      Menu.renderClearFortunesBtn();
    }

    static renderThreeCardBtn(){
      const options = document.getElementById("options");
          
      let newFortune = document.createElement("btn");
      newFortune.innerHTML = "Three Card Draw"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.dataset.cardAmount = "3"
      newFortune.addEventListener('click',Fortune.create);

      options.appendChild(newFortune);
    }

    static renderSingleCardBtn(){
      const options = document.getElementById("options");
          
      let newFortune = document.createElement("btn");
      newFortune.innerHTML = "One Card Draw"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.dataset.cardAmount = "1"
      newFortune.addEventListener('click',Fortune.create);

      options.appendChild(newFortune);
    }

    static renderViewFortunesBtn(){
      const options = document.getElementById("options");

      let viewFortunes = document.createElement("btn");
      viewFortunes.innerHTML = "View Fortunes"
      viewFortunes.id = "view-fortunes"
      viewFortunes.classList = "navBtns"
      viewFortunes.addEventListener('click',Fortune.renderAll);

      options.appendChild(viewFortunes);
    }

    static renderClearFortunesBtn(){
      const options = document.getElementById("options");
          
      let clearBtn = document.createElement("btn");
      clearBtn.innerHTML = "Clear Fortunes"
      clearBtn.id = "clear-fortunes"
      clearBtn.classList = "navBtns"
      clearBtn.addEventListener('click',Menu.clearFortunes);

      options.appendChild(clearBtn);
    }

    static clearFortunes(){
      let fortunes = document.getElementById("fortunes-container");
      fortunes.innerHTML = "";
    }

}
