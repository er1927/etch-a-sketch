// Declaring a variable for the container created in the HTML:
const grid = document.getElementById("container");
const colorPicker = document.querySelector("#color");
const eraseCell = document.querySelector(".fa-eraser");
const clearAll = document.querySelector(".fa-broom");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-element');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "pink";
        })
        grid.appendChild(div); 
    }
    };
    createGrid();

    colorPicker.addEventListener("click", showsColors);
    eraseCell.addEventListener("click", erasesByCell);
    clearAll.addEventListener("click", clearsGrid);

function showsColors() {
    // console.log("You've clicked on the color picker") // works

}

function erasesByCell() {
    console.log("You've clicked on the eraser") // works   
    
}



function clearsGrid() {
    // console.log("You've clicked on the clear grid lil broom") // works
    grid.innerHTML= "";
    createGrid(); //it works!!!
    
}