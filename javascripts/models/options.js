class Options {
    static render(){
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
}