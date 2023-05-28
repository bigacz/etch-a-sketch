const canvaDiv = document.getElementById('canvaDiv');
const gridSlider = document.getElementById('gridSlider');
const clearButton = document.getElementById('clearButton');
let color = 'black';
let pressed = false;

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

function paint(element) {
    if(pressed) {
        element.currentTarget.style.backgroundColor = color;
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