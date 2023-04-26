// creo la funzione

// associo al bottono l'effetto della funzione

// aggiungo la funzione che cambia colore al click

const griglia = document.getElementById("grid");

const start = document.getElementById("start");

start.addEventListener("click", addSquares);

function addSquares() {
    for (let i = 0; i < 100; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square100");
        griglia.appendChild(newSquare);
        
    }
}