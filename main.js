function createGrid(size) {
    const content = document.querySelector('.content');
  
    for (let i = 0; i < size; i++) {
      const cols = document.createElement('div');
      cols.className = 'cols';
  
      for (let j = 0; j < size; j++){
        const rows = document.createElement('div');
        rows.className = 'rows';

        rows.addEventListener('mouseover', () => {
            rows.classList.add('autoColor')
        })

        cols.appendChild(rows);
        }
        content.appendChild(cols);
    }
  }
    window.onload = function() {
    createGrid(60);
  };

function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color = "rgb(" + R + "," + G + "," + B + ")";
    return color;
}

 /* 
  function makeGrid(size) {

    let divContainer = document.querySelector("#div-container");
    let checkBox = document.querySelector("#myCheck");

            row.addEventListener("mouseover", () => {
                if(checkBox.checked) {
                    row.style.backgroundColor = randomColor();
                } else {
                    row.classList.add("colored");
                }
}

function startGame() {
    let size = prompt("choose the number of squares per side (max 100)");
    if(size > 100) {
        alert("you need to enter a value bigger than 0 smaller than 100")
    }
    if(size !== null && size <= 100) {
        makeGrid(size);
    }
}

 */