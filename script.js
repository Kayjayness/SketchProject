let generateButton = document.querySelector(".generate");
let areaContainer = document.querySelector(".divContainer");
let gridAmount = null;
let gridLength = null;

generateButton.addEventListener ("click", () => {
    gridAmount = prompt("How many squares would you like your drawing pad to contain?");
    gridLength = 100 / gridAmount;
    console.log(gridLength);
    createSketchArea();
});

function createSketchArea() {
    for(let i = 1; i <= gridAmount; ++i) {
        for(let j = 1; j <= gridAmount; ++j) {
            let createDivs = document.createElement("div");
            createDivs.classList.add("areaDivs");
            areaContainer.appendChild(createDivs);
            createDivs.style.flex = `1 1 ${gridLength}%`;
            
        }
    }
}