function createGrid(size) {
    const content = document.querySelector('.content');
    content.innerHTML = ''; //REMOVE ALL EXISTING CHILD ELEMENTS
    const rColor = document.querySelector('#randomColor');
    const white = document.querySelector('#white');
    const black = document.querySelector('#black');

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

            black.addEventListener('change', function (event) {
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

function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color = "rgb(" + R + "," + G + "," + B + ")";
    return color;
}

function start(){
    let size;
    const gridSize = document.querySelector('#gridSize');
    const msg = document.querySelector('.msg');
    size = gridSize.value;
    
    if(isNaN(size)){msg.textContent = "you enter a letter"}
    else if(size > 100) {msg.textContent = "The value enter is above 100"}
    else if (size === ""){msg.textContent = "Please enter a value"}
    else{createGrid(size)}

    document.querySelector('#gridSize').value = ""
}
start();