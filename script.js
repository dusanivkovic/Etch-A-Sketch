const fragment = document.createDocumentFragment();
const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('square')
    fragment.append(div);
}
container.append(fragment);

let square = document.getElementsByClassName('square');
[...square].forEach(item => {
    item.addEventListener('mouseover', e => {e.target.style.backgroundColor = 'gray'})
})


