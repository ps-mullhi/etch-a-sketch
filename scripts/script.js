function generateAndInsertDivs(numDivs) {
    const container = document.querySelector("#container");

    for(let i = 0; i < numDivs; i++){
        let newDiv = document.createElement("div");
        let divId = "div" + (i+1);
        newDiv.setAttribute("id", divId);
        newDiv.classList.add("gridSquare")

        newDiv.addEventListener("mouseover", (e) => {
            const element = e.target;
            
            randomlyAssignGridColor(element);
            updateOpacity(element);
        });

        container.appendChild(newDiv);
    }
}

const gridSizeButton = document.querySelector("#userInput");
gridSizeButton.addEventListener("click", () => {
    let gridSizeInput;
    do {
        gridSizeInput = prompt("Enter in number of squares per side of grid (max 100):");
        parseInt(gridSizeInput);
        if(isNaN(gridSizeInput)) {
            alert("NOT A WHOLE NUMBER");
        }
    }  while (isNaN(gridSizeInput));

    adjustGridSize(gridSizeInput);
});

function adjustGridSize(numSquaresPerSide) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    generateAndInsertDivs(numSquaresPerSide * numSquaresPerSide);

    //minus 2 because border of 1px on every side of gridSquare.
    let newGridSquareDimension = ((1000 / numSquaresPerSide) - (2)) + "px";
    const gridSquares = document.querySelectorAll(".gridSquare")
    console.log(newGridSquareDimension);
    

    gridSquares.forEach((element) => {
        element.style.minHeight = newGridSquareDimension;
        element.style.minWidth = newGridSquareDimension;
    });
}

function randomlyAssignGridColor(element) {
    const redValue = Math.floor(Math.random() * 255);
    const blueValue = Math.floor(Math.random() * 255);
    const greenValue = Math.floor(Math.random() * 255);

    element.style.backgroundColor = `rgb(${redValue},${blueValue},${greenValue})`;
}

function updateOpacity(element){
    let currentOpacity = window
        .getComputedStyle(element)
        .getPropertyValue("opacity");
    
    let newOpacity = parseFloat(currentOpacity) + 0.1; //increase by 10%
    if(newOpacity > 1) {
        newOpacity = 1; //max 100% opacity
    }
    
    element.style.opacity = newOpacity;
}