function createGrid(size) {
    const content = document.querySelector('.content');
  
    for (let i = 0; i < size; i++) {
      const cols = document.createElement('div');
      cols.className = 'cols';
  
      for (let j = 0; j < size; j++) {
        const rows = document.createElement('div');
        rows.className = 'rows';

        cols.appendChild(rows);
      }
            content.appendChild(cols);
    }
  }
  window.onload = function() {
    createGrid(50);
  };
 /* 
  function makeGrid(size) {

    let divContainer = document.querySelector("#div-container");
    let checkBox = document.querySelector("#myCheck");

    console.log(divContainer.id)
    
    divContainer.innerHTML = ""
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column")

        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");

            row.addEventListener("mouseover", () => {
                if(checkBox.checked) {
                    row.style.backgroundColor = randomColor();
                } else {
                    row.classList.add("colored");
                }
            })
            column.appendChild(row);
        }
        divContainer.appendChild(column);
        
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

function randomColor() {
    let rndR = Math.floor(Math.random() * 256);
    let rndG = Math.floor(Math.random() * 256);
    let rndB = Math.floor(Math.random() * 256);

    let color = "rgb(" + rndR + "," + rndG + "," + rndB + ")";
    return color;
} */