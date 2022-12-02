// console.log("is this thing on??");

const gridContainer = document.querySelector(".grid-container");

// // not sure this one down below works, 
// I can see the purple outline but not the indiviaul cells in orange

function createGrid (numCells) {
    for (let d = 0; d < numCells; d++) {
        let cells = document.createElement("div");
        gridContainer.appendChild(cells); //I get an err for cells on the console
    }
};

createGrid(256);