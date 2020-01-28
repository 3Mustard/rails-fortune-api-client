class Menu {
    static render(){
      Menu.renderNewFortuneBtn();
      Menu.renderSingleFortuneBtn();
      Menu.renderViewFortunesBtn();
      Menu.renderClearFortunesBtn();
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

    static renderNewFortuneBtn(){
      const options = document.getElementById("options");
          
      let newFortune = document.createElement("btn");
      newFortune.innerHTML = "Three Card Draw"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.addEventListener('click',Fortune.create);

      options.appendChild(newFortune);
    }

    static renderSingleFortuneBtn(){
      const options = document.getElementById("options");
          
      let newFortune = document.createElement("btn");
      newFortune.innerHTML = "One Card Draw"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.addEventListener('click',Fortune.createOneCardFortune);

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

    static clearFortunes(){
      let fortunes = document.getElementById("fortunes-container");
      fortunes.innerHTML = "";
    }

}
