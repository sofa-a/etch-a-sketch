function alterGrid(width) {
    // remove grid
    const container = document.querySelector("#grid");
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.remove();
    });
    // create new grid
    alterContainer(width);
    createGrid(width);
}

function alterContainer(width) {
    let padding = 25;
    let length = ((padding*2)*width) + (width*2);
    const grid = document.querySelector("#grid");
    grid.style.width = `${length}px`;
    grid.style.height = `${length}px`;
    
}

function createGrid(width) {
    const container = document.querySelector("#grid");
    for(let i=0; i<(width*width); i++) {
        const element = document.createElement("div");
        element.classList.add("element");
        element.style.padding = "25px";
        element.style.border = "1px solid black";
        element.addEventListener("mouseover", function (e) {
            e.target.style.background = "grey";
        });
        element.addEventListener("mouseout", function (e) {
            e.target.style.background = "white";
        });
        container.appendChild(element);
    }

}

function sizeButton() {
    const button = document.querySelector("#size");
    button.addEventListener("click", function () {
        const userInput = prompt("Enter a width (1-100): ");    
        if (userInput < 101 || userInput > 0) {
            alterGrid(userInput);
        }
        else {
            alert("You entered an incorrect amount");
        }
    });
}

alterContainer(16);
sizeButton();
createGrid(16);
