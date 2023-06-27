function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(function () {
        message.style.display = 'none';
    }, 5000);
}




let counter = 0;
let intervalId;

function startInterval() {
    const counterElement = document.getElementById('counter');
    const messageElement = document.getElementById('message2');
    const startButton = document.getElementById('startButton');

    if (!intervalId) {
        counter = 0;
        counterElement.textContent = counter;
        counterElement.style.color = 'blue';
        messageElement.textContent = '';

        intervalId = setInterval(function () {
            counter++;
            counterElement.textContent = counter;

            if (counter > 5) {
                clearInterval(intervalId);
                intervalId = null;
                counterElement.style.color = 'red';
                messageElement.textContent = 'fim da contagem!';
            }
        }, 1000);

        startButton.textContent = 'Parar Intervalo';
    } else {
        clearInterval(intervalId);
        intervalId = null;
        counterElement.style.color = 'blue';
        startButton.textContent = 'Iniciar Intervalo';
        messageElement.textContent = '';
    }
}