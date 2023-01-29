const fragment = document.createDocumentFragment();
const container = document.querySelector('#container');
const range = document.getElementById('range');
const labelRange = document.getElementById('label-range');
const eraser = document.querySelector('#clear');
const bgColor = document.querySelector('#bg-color');
const penColor =document.querySelector('#pen-color');
const root = document.documentElement;
let gridSize = 12;
drawSquare(gridSize);
squareHover(container);
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
        e.target.classList.add('square-hover')
    })
}
function clearSquare(box, size) {
    while (box.firstChild
        ) {
            box.removeChild(box.firstChild);
        }
    drawSquare(size);
    const square = document.querySelectorAll('.square');
    console.log(square.length)
    root.style.setProperty('--square-size', `${600/size}px`);
}
range.addEventListener('input', e => {
    labelRange.innerHTML = '<span id="range-value">Grid size: ' + e.target.value + ' * ' + e.target.value + '<span>';
    gridSize = e.target.value;
    clearSquare(container, gridSize);
    root.style.setProperty('--bg-color', 'burlywood')
});
eraser.addEventListener('click', () => {clearSquare(container, gridSize)});
console.log(bgColor.value)
bgColor.addEventListener('input', () => {
    root.style.setProperty('--bg-color', bgColor.value);
})
penColor.addEventListener('input', () => {
    root.style.setProperty('--pen-color', penColor.value)
})







