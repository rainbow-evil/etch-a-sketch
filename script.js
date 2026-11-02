const container = document.querySelector('.container');

function createGrid(size){
    for (let i = 1; i <= size; i++){
        let baseSquare = document.createElement('div');
        baseSquare.classList.add('squareBase');
        container.appendChild(baseSquare);
        for (let j = 1; j <= size; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            baseSquare.appendChild(square);
        }
    }
}

createGrid(10);