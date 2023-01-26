const fragment = document.createDocumentFragment();
const container = document.querySelector('#container');
let n = 4; 
for (let i = 0; i < n; i++) {
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    fragment.append(divRow);
    for (let j = 0; j < n; j++) {
        const div = document.createElement('div');
        div.classList.add('square')
        divRow.append(div);
        // fragment.append(div);
    }
}
container.append(fragment);


let square = document.getElementsByClassName('square');
[...square].forEach(item => {
    item.addEventListener('mouseover', e => {e.target.style.backgroundColor = 'gray'});
    // item.addEventListener('mouseout', e => {e.target.style.backgroundColor = 'white'});
})


