// Seleciona todos os elementos com a classe 'link'
const links = document.querySelectorAll('.link');

// Itera sobre cada elemento link
links.forEach(link => {
    // Adiciona um ouvinte de evento de clique a cada link
    link.addEventListener('click', event => {
        // Impede o comportamento padrão do clique de um link (neste caso, evitar redirecionamento)
        event.preventDefault();

        // Adiciona a classe 'clicked' ao elemento link
        link.classList.add('clicked');

        // Obtém as referências aos elementos do modal de confirmação por seus IDs
        const confirmationModal = document.getElementById('confirmationModal');
        const confirmButton = document.getElementById('confirmButton');
        const cancelButton = document.getElementById('cancelButton');

        // Exibe o modal de confirmação definindo seu estilo de exibição como 'block'
        confirmationModal.style.display = 'block';

        // Adiciona um ouvinte de evento de clique ao botão de confirmação
        confirmButton.addEventListener('click', () => {
            // Remove a classe 'clicked' do elemento link
            link.classList.remove('clicked');
            // Esconde o modal de confirmação definindo seu estilo de exibição como 'none'
            confirmationModal.style.display = 'none';
            // Abre o URL do link em uma nova guia
            window.open(link.href, '_blank');
        });

        // Adiciona um ouvinte de evento de clique ao botão de cancelamento
        cancelButton.addEventListener('click', () => {
            // Remove a classe 'clicked' do elemento link
            link.classList.remove('clicked');
            // Esconde o modal de confirmação definindo seu estilo de exibição como 'none'
            confirmationModal.style.display = 'none';
        });
    });
});
