const canvaDiv = document.getElementById('canvaDiv');
const gridSlider = document.getElementById('gridSlider')
let color = 'black';

createCanvas();
gridSlider.addEventListener('click', createCanvas)

function createCanvas() {
    const gridSize = gridSlider.value;
    const flexBasisValue = 
    Math.floor((100 / gridSize) * 1000) / 1000; 
    removeAllChildren(canvaDiv);
    console.log(flexBasisValue);
    for(i = 0; i < gridSize**2; i++) {
        const canvaSquare = document.createElement('div');
        canvaSquare.classList.add('canvaSquare');
        canvaSquare.style.flexBasis = `${flexBasisValue}%`;
        canvaSquare.addEventListener('mouseover', e => paint(e))
        canvaDiv.appendChild(canvaSquare);
    }
    document.get
}


function paint(element) {
    element.currentTarget.style.backgroundColor = color;
}

function removeAllChildren (element) {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}