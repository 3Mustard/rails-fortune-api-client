class Menu {
    static render(){
      Menu.renderNewFortuneBtn();
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
      newFortune.innerHTML = "New Fortune"
      newFortune.id = "new-fortune"
      newFortune.classList = "navBtns"
      newFortune.addEventListener('click',Fortune.create);

      options.appendChild(newFortune);
    }

    static renderViewFortunesBtn(){
      const options = document.getElementById("options");

      let viewFortunes = document.createElement("btn");
      viewFortunes.innerHTML = "View Fortune"
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
