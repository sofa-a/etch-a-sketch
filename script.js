function alterGrid(width) {
    // remove grid
    const container = document.querySelector("#grid");
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.remove();
    });
    // create new grid
    createGrid(width);
}

function createContainer(width) {
    
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

sizeButton();
createGrid(16);
