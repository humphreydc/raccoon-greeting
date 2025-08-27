const background = document.querySelector('body');
const raccoon = document.getElementById('pixel-grid');
const button = document.querySelector('button');
const lights = document.getElementById('container-lights');
const text = document.querySelector('h1');

button.addEventListener('click', () => {
    raccoon.style.display = 'grid';
    button.style.display = 'none';
    background.style.backgroundColor = '#65993e';
    lights.style.display = 'flex';
    text.style.display = 'flex';
})
