const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        link.classList.add('clicked');

        const confirmationModal = document.getElementById('confirmationModal');
        const confirmButton = document.getElementById('confirmButton');
        const cancelButton = document.getElementById('cancelButton');

        confirmationModal.style.display = 'block';

        confirmButton.addEventListener('click', () => {
          
                link.classList.remove('clicked');
                confirmationModal.style.display = 'none';
                window.open(link.href, '_blank'); // Abre o URL do link em uma nova guia
            
        });

        cancelButton.addEventListener('click', () => {
            link.classList.remove('clicked');
            confirmationModal.style.display = 'none';
        });
    });
});
