

//3 ##############  intermediario #############

const alterarCor = document.getElementById('myHeading');

function changeColor() {
    const colors = [ 'red', 'blue', 'green', 'yellow', 'purple' ];
    const randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    alterarCor.style.color = randomColor;

}

alterarCor.addEventListener('click', changeColor);


// 3 ####### nivel dificil #############
const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');
let count = 0;

function incrementCount() {
    count++;
    clickCount.textContent = `Total de cliques: ${count}`;
}
clickButton.addEventListener('click', incrementCount);

// 3 ############## Super Dificil #############

const cores = document.querySelectorAll('#squareTable td');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[ Math.floor(Math.random() * 16) ];
    }
    return color;
}

cores.forEach(square => {
    square.addEventListener('click', function () {
        const color = getRandomColor();
        this.style.backgroundColor = color;
    });
});
