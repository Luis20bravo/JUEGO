const animals = document.querySelectorAll('.animal');
const startButton = document.getElementById('start-button');
const messageDiv = document.getElementById('message');
const statusDiv = document.getElementById('status');

let protectionStatus = {
    elephant: false,
    tiger: false,
    bear: false,
};

function resetGame() {
    protectionStatus = {
        elephant: false,
        tiger: false,
        bear: false,
    };
    messageDiv.textContent = '';
    statusDiv.textContent = '';
}

function startGame() {
    resetGame();
    messageDiv.textContent = '¡Protege a los animales! Haz clic en ellos antes de que se vayan.';
}

animals.forEach(animal => {
    animal.addEventListener('click', () => {
        const species = animal.getAttribute('data-species');
        if (!protectionStatus[species]) {
            protectionStatus[species] = true;
            statusDiv.textContent += `¡Has protegido al ${animal.textContent}! `;
        } else {
            statusDiv.textContent += `El ${animal.textContent} ya está protegido. `;
        }

        // Finalizar el juego si todos los animales están protegidos
        if (Object.values(protectionStatus).every(status => status)) {
            messageDiv.textContent = '¡Has protegido a todos los animales! 🥳';
            startButton.disabled = false; // Habilitar el botón para reiniciar el juego
        }
    });
});

startButton.addEventListener('click', () => {
    startGame();
    startButton.disabled = true; // Deshabilitar el botón mientras el juego está en curso
});
