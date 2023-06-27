

//3 >>>>>>>>>> Nivel Intermediario <<<<<<<<<<<
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        const color = this.getAttribute('data-color');
        console.log(`Cor do card: ${color}`);
    });
});


// 3 >>>>>>>>>> Nivel Dificil <<<<<<<<<<<
const box = document.querySelector('.box');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function () {
    const toggleValue = box.getAttribute('data-toggle');

    if (toggleValue === 'false') {
        box.setAttribute('data-toggle', 'true');
    } else {
        box.setAttribute('data-toggle', 'false');
    }
});


// 3 >>>>>>>>>> Nivel  Super Dificil <<<<<<<<<<<
const card = document.querySelector('.card2');

card.addEventListener('click', function () {
    const currentText = this.getAttribute('data-text');
    const newText = currentText === 'Olá' ? 'Mundo' : 'Olá';
    this.setAttribute('data-text', newText);
    this.innerText = newText;

    if (this.style.backgroundColor === 'yellow') {
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'yellow';
    }
});
