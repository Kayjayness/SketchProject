let generateButton = document.querySelector(".generate");
let areaContainer = document.querySelector(".divContainer");
let gridAmount = null;
let gridLength = null;
let currentOpacity = 1;

generateButton.addEventListener ("click", () => {
    removeElements();
    gridAmount = prompt("How many squares would you like your drawing pad to contain?");
    gridLength = 100 / gridAmount;
    createSketchArea();
});

function removeElements() {
    while(areaContainer.firstChild) {
        areaContainer.removeChild(areaContainer.firstChild);
        console.log("removed")
    }
}

function createSketchArea() {
    for(let i = 1; i <= gridAmount; ++i) {
        for(let j = 1; j <= gridAmount; ++j) {
            let createDivs = document.createElement("div");
            createDivs.classList.add("areaDivs");
            areaContainer.appendChild(createDivs)
            createDivs.style.flex = `1 1 ${gridLength}%`;

            createDivs.addEventListener("mouseover", () => {
                randomColor(createDivs);
            });
        }
    }
}

function randomColor(div) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    let newColor = "rgb(" + red + "," + green + "," + blue + "," + currentOpacity + ")";
    div.style.backgroundColor = newColor;
    if(currentOpacity <= 0) {
        currentOpacity = 1;
    }
    currentOpacity -= 0.1;
    console.log(currentOpacity);
  }