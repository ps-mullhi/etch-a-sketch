function generateAndInsertDivs(numDivs) {
    const container = document.querySelector("#container");

    for(let i = 0; i < numDivs; i++){
        let newDiv = document.createElement("div");
        let divId = "div" + (i+1);
        newDiv.classList.add("gridDiv")
        newDiv.setAttribute("id", divId);
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("gridHover");
        });

        container.appendChild(newDiv);
    }
}

function main() {
    generateAndInsertDivs(20);
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

    let containerWidth = numSquaresPerSide * 10 + (numSquaresPerSide * 2);
    container.style.width = containerWidth + "px";

}


main();