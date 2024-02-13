const content = document.querySelector('.content');
function createGrid(size) {
    const rColor = document.querySelector('#randomColor');
    const white = document.querySelector('#white');
    const blue = document.querySelector('#blue');

    for (let i = 0; i < size; i++) {
        const cols = document.createElement('div');
        cols.className = 'cols';

        for (let j = 0; j < size; j++) {
            const rows = document.createElement('div');
            rows.className = 'rows';

            white.addEventListener('change', function (event) {
                if (event.target.checked) {
                    rows.addEventListener('mouseover', () => {
                        rows.style.backgroundColor = '#fff';
                    })
                }
            })

            blue.addEventListener('change', function (event) {
                if (event.target.checked) {
                    rows.addEventListener('mouseover', () => {
                        rows.style.backgroundColor = 'black';
                    })
                }
            })

            rColor.addEventListener('change', function (event) {
                if (event.target.checked) {
                    rows.addEventListener('mouseover', () => {
                        rows.style.backgroundColor = randomColor();
                    })
                }
            })

            cols.appendChild(rows);
        }
        content.appendChild(cols);
    }
}
window.onload = function () {
    createGrid(70);
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