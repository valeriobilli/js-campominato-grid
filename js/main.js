// creo la funzione

// associo al bottono l'effetto della funzione

// aggiungo la funzione che cambia colore al click

const grid = document.getElementById("grid");

const start = document.getElementById("start");

start.addEventListener("click", addSquares);

newSquare.addEventListener("click", function(){
    newSquare.classList.toggle("selected")
})

// funzione per generare i quadrati
function addSquares() {
    for (let i = 0; i < 100; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square100");
        grid.appendChild(newSquare);
        newSquare.innerHTML = i+1; 
    }
}

// funzione per selezionare i quadrati





