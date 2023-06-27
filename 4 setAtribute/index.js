

//3 >>>>>>>>>> Nivel Intermediario <<<<<<<<<<<
const button = document.getElementById('destacarBtn');
const paragraph = document.querySelector('p');

button.addEventListener('click', function () {
    paragraph.setAttribute('class', 'highlight');
});


// 3 >>>>>>>>>> Nivel Dificil <<<<<<<<<<<
const box = document.querySelector('.box');
const button2 = document.getElementById('animarBtn');
let espandir = false;

button2.addEventListener('click', function () {
    if (!espandir) {
        box.setAttribute('style', 'width: 200px; height: 200px; background-color: blue;');
        espandir = true;
    } else {
        box.setAttribute('style', 'width: 100px; height: 100px; background-color: red;');
        espandir = false;
    }
});


// 3 >>>>>>>>>> Nivel  Super Dificil <<<<<<<<<<<
const card = document.querySelector('.card');
let cor = false;

card.addEventListener('click', function () {
    const currentText = this.innerText;
    const newText = currentText === 'Olá' ? 'Mundo' : 'Olá';
    this.setAttribute('data-text', newText);
    this.innerText = newText;

    if (!cor) {
        this.style.backgroundColor = 'green';
        cor = true;
    } else {
        this.style.backgroundColor = 'yellow';
        cor = false;
    }
});
