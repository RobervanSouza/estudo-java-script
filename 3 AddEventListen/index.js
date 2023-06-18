

//3 ##############  intermediario #############

const alterarCor = document.getElementById('myHeading');

function changeColor() {
    const colors = [ 'red', 'blue', 'green', 'yellow', 'purple' ];
    const randomColor = colors[ Math.floor(Math.random() * colors.length) ];
    alterarCor.style.color = randomColor;
}

alterarCor.addEventListener('click', changeColor);


// 3 ####### nivel dificil #############

const lista = document.getElementById('lista');

const fetchButton = document.getElementById('fetchButton');
const container = document.getElementById('container');

const maxCardCount = 5; // Defina o número máximo de cartões permitidos
const maxTextLength = 10; // Defina o comprimento máximo do texto permitido

fetchButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados da API');
            }
            return response.json();
        })
        .then(data => {
            let cardCount = 0; // Variável para acompanhar a quantidade de cartões criados
            data.forEach(item => {
                // Verificar se o número máximo de cartões foi atingido
                if (cardCount >= maxCardCount) {
                    return; // Ignorar a criação de cartões adicionais
                }
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p>Id: ${item.id}</p>
                    <h3> Titulo: ${item.title}</h3>
                    <p> Descrição: ${item.body.slice(0, maxTextLength) }</p>
                `;
                container.appendChild(card);

                cardCount++; // Incrementar a quantidade de cartões criados
            });
        })
        .catch(error => {
            console.error(error);
        });
});
