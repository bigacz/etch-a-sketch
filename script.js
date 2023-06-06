const canvaDiv = document.getElementById('canvaDiv');
const gridSlider = document.getElementById('gridSlider');

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener(`mouseover`, e =>
    e.currentTarget.classList.add(`clearActive`));
clearButton.addEventListener(`mouseleave`, e =>
    e.currentTarget.classList.remove(`clearActive`));

const githubIcon = document.getElementById(`githubIcon`)
    githubIcon.addEventListener(`mouseover`, e => {
        e.currentTarget.classList.add(`githubHover`);
    })
    
    githubIcon.addEventListener(`mouseleave`, e => {
        e.currentTarget.classList.remove(`githubHover`);
    })
    

isPressed();
createCanvas();

clearButton.addEventListener('click', createCanvas);
gridSlider.addEventListener('click', createCanvas);

function createCanvas() {
    const gridSize = gridSlider.value;
    const flexBasisValue = 
    Math.floor((100 / gridSize) * 1000) / 1000; 
    removeAllChildren(canvaDiv);
    for(i = 0; i < gridSize**2; i++) {
        const canvaSquare = document.createElement('div');
        canvaSquare.classList.add('canvaSquare');
        canvaSquare.style.flexBasis = `${flexBasisValue}%`;
        canvaSquare.addEventListener('mouseover', e => paint(e))
        canvaDiv.appendChild(canvaSquare);
    }
}

let pressed = false;
let blackCount = 1;
function paint(element) {
    if(pressed) {
        let paintColor = 
        `rgb(${random(255)}, ${random(255)}, ${random(255)}`;
        blackCount += 1;
        if(blackCount > 10) {
            paintColor = 'black';
            blackCount = 0;
        } 
        element.currentTarget.style.backgroundColor = paintColor;
    }
}

function isPressed() {
    window.onmousedown = () =>{
        pressed = true;
    }
    window.onmouseup = () =>{
        pressed = false;
    }
    
}

function removeAllChildren (element) {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

function random(num) {
    return Math.floor(Math.random() * num);
}