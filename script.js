const container = document.querySelector('.container');
const form = document.querySelector('form');
//const btn = document.querySelector('button');

function createGrid(e){
    e.preventDefault();
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    let size = document.getElementById('size').value;
    if (size > 100){ size = 100};
    for (let i = 1; i <= size; i++){
        let baseSquare = document.createElement('div');
        baseSquare.classList.add('squareBase');
        container.appendChild(baseSquare);
        for (let j = 1; j <= size; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            baseSquare.appendChild(square);
            /*if (Math.random() < 0.2){
                let skully = document.createElement('p');
                skully.textContent = '💀';
                square.appendChild(skully);
                square.addEventListener('mouseover', () => alert('Ouch!'));
            } else {
            square.addEventListener('mouseover', () => square.style.opacity -= 0.5);
            }*/
           square.addEventListener('mouseover', () => square.style.opacity -= 0.5);
        }
    }
}

form.addEventListener ('submit', createGrid);