let col = [];
let row = [];
let size = 16;

function draw(size) {
  for (let i= 0; i < size; i++) { // Create rows
    row[i] = document.createElement('div');
    row[i].classList.add('container2');
    container.appendChild(row[i]);
    for (let j = 0; j < size; j++) {  // Create squares in each row
      col[j] = document.createElement('div');
      col[j].classList.add('square');
      row[i].appendChild(col[j]);
    }
  }
}

function pen(color) {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.cssText = `background-color: ${color};`;
    })
  })
}

function penColor() {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      square.style.cssText = `background-color: #${randomColor};`;
    })
  })
}

function erase() {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      square.style.cssText = "background-color: black;";
    })
  })
}

const mode = document.querySelector('#mode');
const defaultMode = document.createElement('button');
defaultMode.textContent = 'Default';
defaultMode.classList.add('mode');
const rainbowMode = document.createElement('button');
rainbowMode.textContent = 'Random color';
rainbowMode.classList.add('mode');

mode.append(defaultMode, rainbowMode);

defaultMode.addEventListener('click', () => pen('#ffffff'));
rainbowMode.addEventListener('click', () => penColor());

const clear = document.querySelector('#erase');
const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase';
eraseButton.classList.add('erase');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.classList.add('erase');
clear.append(eraseButton, clearButton);

eraseButton.addEventListener('click', () => {
  erase();
});

clearButton.addEventListener('click', () => {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach((square) => square.style.cssText = `background-color: black;`);
});

document.addEventListener("DOMContentLoaded", function() {
  draw(size);
  pen('#ffffff');
});

const container = document.querySelector('#container');

const grid = document.querySelector('.grid');
grid.addEventListener('click', () => {
  size = prompt('Enter a number between 2 and 100:');
  if (size < 2 || size > 100) {
    size = prompt('Enter a number between 2 and 100:');
  }
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  draw(size);
  pen('#ffffff');
})

const colorInput = document.querySelector('input');

Coloris({
  onChange: (color) => {
    pen(color);
    colorInput.style.cssText = `color: ${color}`;
  }
});



