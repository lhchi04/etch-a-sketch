let col = [];
let row = [];
let size;

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

function pen() {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.cssText = "background-color: white;";
  })
})
}

const container = document.querySelector('#container');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  size = prompt('Enter a number between 2 and 100:');
  if (size < 2 || size > 100) {
    size = prompt('Enter a number between 2 and 100:');
  }

  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  draw(size);
  pen();
})



