const fragment = document.createDocumentFragment();
const container = document.querySelector('#container');
const range = document.getElementById('range');
const labelRange = document.getElementById('label-range');
const cleaner = document.querySelector('#clear');
const bgColor = document.querySelector('#bg-color');
const penColor =document.querySelector('#pen-color');
const root = document.documentElement;
let gridSize = 12;
drawSquare(gridSize);//Drawing a square with initial values
squareHover(container);//Adding a hover to square
function drawSquare(n) {
    for (let i = 0; i < n; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        fragment.append(divRow);
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.classList.add('square')
            divRow.append(div);
        }
    }
    container.append(fragment);
}
function squareHover(box) {
    box.addEventListener('mouseover', e => {
        if (eraser.matches('.on')) {
            erase(e);
        } else if (rainbow.matches('.on')) {
            console.log(container)
            rainbowColorHover(e);
        }
        else {
            addHover(e);
        }
    })
}
function erase(para) {
    if (para.target.matches('#rainbow')||(para.target.matches('#square-hover'))) {
        para.target.removeAttribute('style');   // Remove style attribute with background-color property
        para.target.removeAttribute('id');     //delete hover ID to the square
    }
}
function addHover(para) {
    if (para.target.matches('.square')) {
        para.target.setAttribute('id','square-hover');
    }
    // Adding hover ID to the element width class "square"
}
const rainbowColors = ['red', 'green', 'blue', 'orange', 'yellow', 'brown'];
function rainbowColorHover(para) {
    let i = Math.floor(Math.random() * 5);
    // root.style.setProperty('--pen-color', rainbowColors[i]);
    if (para.target.matches('.square')) {
        para.target.style.backgroundColor = rainbowColors[i];
        para.target.setAttribute('id', 'rainbow');
        console.log('yea')
    }
}
function clearSquare(box, size) {
    while (box.firstChild
        ) {
            box.removeChild(box.firstChild);
        }// clean all square 
    drawSquare(size);
    const square = document.querySelectorAll('.square');// Obtaning a square with class
    root.style.setProperty('--square-size', `${600/size}px`);// Set root variable
}
range.addEventListener('input', e => {
    labelRange.innerHTML = '<span id="range-value">Grid size: ' + e.target.value + ' * ' + e.target.value + '<span>';
    gridSize = e.target.value;
    clearSquare(container, gridSize);// clearing existing squares and adding new ones
    root.style.setProperty('--bg-color', 'burlywood')// Set root variable
});
cleaner.addEventListener('click', () => {clearSquare(container, gridSize)});// calling a function
bgColor.addEventListener('input', () => {
    root.style.setProperty('--bg-color', bgColor.value);
})// Set background color in root variable
penColor.addEventListener('input', () => {
    root.style.setProperty('--pen-color', penColor.value)
})// Set pen color in root variable
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
eraser.addEventListener('click', (e) => {
    if (rainbow.matches('.on')) {
        rainbow.classList.remove('on');
    }
    e.target.classList.toggle('on');
})// Toggle clas in eraser button
rainbow.addEventListener('click', (e) => {
    if (eraser.matches('.on')) {
        eraser.classList.remove('on');
    }
    e.target.classList.toggle('on');
})











