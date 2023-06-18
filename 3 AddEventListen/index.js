

//3 ##############  intermediario #############

const alterarCor = document.getElementById('myHeading');

function changeColor() {
    const colors = [ 'red', 'blue', 'green', 'yellow', 'purple' ];
    const randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    alterarCor.style.color = randomColor;
}

alterarCor.addEventListener('click', changeColor);


// 3 ####### nivel dificil #############
