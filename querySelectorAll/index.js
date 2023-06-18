
//1 usando o querySelectorAll

// 3 ########### nivel facil ############
// Seleciona todos os elementos <p> dentro de elementos <div> e os armazena na variável 'paragrafos'
const paragrafos = document.querySelectorAll('div p');

// Itera sobre cada parágrafo da lista 'paragrafos'
paragrafos.forEach(paragrafo => {
    // Adiciona um evento de clique a cada parágrafo
    paragrafo.addEventListener('click', () => {
        // Ao ser clicado, altera a cor do parágrafo para uma cor aleatória obtida pela função 'getRandomColor'
        paragrafo.style.color = getRandomColor();
    });
});

// Definição da função 'getRandomColor', que retorna uma cor hexadecimal aleatória
function getRandomColor() {
    // Declaração da string 'letters' contendo os caracteres possíveis para uma cor hexadecimal
    const letras = '0123456789ABCDEF';
    // Declaração da variável 'color' inicializada com o caractere '#' (indicador de cor hexadecimal)
    let cor = '#';
    // Loop que itera 6 vezes para criar um código hexadecimal de 6 dígitos
    for (let i = 0; i < 6; i++) {
        // Gera um índice aleatório entre 0 e 15 para obter um caractere da string 'letras'
        // e o concatena à variável 'cor'
        cor += letras[ Math.floor(Math.random() * 16) ];
        // Math.floor arredonda um numero e o Math.random gera numero entre 0 e 1
    }
    // Retorna a cor hexadecimal aleatória gerada
    return cor;
}




//3 ##############  intermediario #############

// Selecionando todos os elementos com a classe 'item' e adicionando uma classe adicional
const links = document.querySelectorAll('ul.list li a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        link.classList.add('clicked');
        setTimeout(() => {
            const confirmation = window.confirm('Deseja realmente ir para esta página?');
            if (confirmation) {
                link.classList.remove('clicked');
                window.open(link.href, '_blank'); // Abre o URL do link em uma nova guia
            } else {
                link.classList.remove('clicked');
            }
        }, 1000);
    });
});


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
