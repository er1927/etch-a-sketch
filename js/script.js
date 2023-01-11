const grid = document.getElementById("container");
const colorPicker = document.querySelector("#color");
const clearAll = document.querySelector(".fa-broom");
let colorPicked =

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-element');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = colorPicked;
        })
        grid.appendChild(div); 
    }
    };
    createGrid();

colorPicker.addEventListener("input", showsColors);
clearAll.addEventListener("click", clearsGrid);

function showsColors(e) {
    colorPicked = e.target.value; 
}

function clearsGrid() {
    grid.innerHTML= "";
    createGrid();
}