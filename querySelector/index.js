
//1 usando o querySelector

// 3 ########### nivel facil ############
// Selecionando o elemento pelo id e modificando seu conteúdo
const elemento = document.querySelector("#meuElemento"); 
elemento.textContent = "Este é o novo conteúdo nivel facil!";
// o textContent  adiciona um novo texte



//3 ##############  intermediario #############

// Selecionando todos os elementos com a classe 'item' e adicionando uma classe adicional

function alterarItens() {
    const container = document.querySelector(".container");
    const wrapper = container.querySelector(".wrapper");
    const items = wrapper.querySelectorAll(".item");

    items.forEach((item, index) => {
        const novoItem = document.createElement("p")
        novoItem.textContent= " - Modificado nivel intermediario"
        item.appendChild(novoItem);
        novoItem.classList.add("destaque1")
    });
}

alterarItens();

const elementos = document.querySelectorAll(".item");
elementos.forEach((elemento, index) => {
    const novoBloco = document.createElement("span");
    novoBloco.textContent = "criando novo item intermediario!";
    novoBloco.classList.add("destaque")
    elemento.appendChild(novoBloco);
});

// 3 ####### nivel dificil #############
// Função para adicionar um novo item à lista
const campoTexto = document.querySelector("#campoTexto");
const botaoAdicionar = document.querySelector("#botao");

function adicionarItem(event) {
    if (
        (event.key === "Enter" || event.keyCode === 13 || event.type === "click") &&
        campoTexto.value.trim() !== ""
    ) {
        const lista = document.querySelector("#lista");
        const item1 = document.createElement("p");
        item1.textContent = campoTexto.value;
        item1.classList.add("item1");
        lista.appendChild(item1);
        campoTexto.value = "";
    }
}

campoTexto.addEventListener("keydown", adicionarItem);
botaoAdicionar.addEventListener("click", adicionarItem);
