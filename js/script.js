// Declaring a variable for the container created in the HTML:
const grid = document.getElementById("container");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-element');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'teal';
        })
        grid.appendChild(div); 
    }
    };
    createGrid();

