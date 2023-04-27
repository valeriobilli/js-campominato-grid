const grid = document.getElementById("grid");
const play = document.getElementById("playBtn");
play.addEventListener("click", startGame);

var startGame = false;

// funzione per generare i quadrati
function startGame() {
    if (startGame == false) {
        let nOfCell = document.getElementById("level").value;
    let cellParSide = Math.sqrt(nOfCell)
    let dimensione = `calc(100% / ${cellParSide})`
    console.log("Gioco avviato")
    
    for (let i = 0; i < nOfCell; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.width = dimensione;
        newSquare.style.height = dimensione;
        grid.appendChild(newSquare);
        newSquare.innerHTML = i+1; 

        newSquare.addEventListener("click", function(){
            this.classList.toggle("selected")
            console.log("Hai selezionato la casella numero", i+1)
        })
       
    }

    startGame = true;

    } else {
        console.log("Il gioco è già inizializzato");
    }

}

let restart = document.getElementById("restartBtn");
restart.addEventListener("click", refresh);


function refresh(){
    window.location.reload("Refresh")
  }

        








