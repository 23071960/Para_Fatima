
// Função para controlar o áudio e alternar entre os rótulos "Play" e "Stop"

let audioPlaying = null; // Armazena o áudio que está atualmente tocando

function toggleAudio(audioElement, button) {
    if (audioPlaying && audioPlaying !== audioElement) {
        audioPlaying.pause(); // Pausa o áudio anterior se estiver tocando
        audioPlaying.currentTime = 0;
        const previousButton = document.querySelector(`[data-audio="${audioPlaying.id}"]`);
        previousButton.textContent = 'Play';
        previousButton.style.backgroundColor = ''; // Remove a cor do botão anterior
    }

    if (audioElement.paused || audioElement.ended) {
        audioElement.play();
        button.textContent = 'Stop';
        button.style.backgroundColor = 'green'; // Altera a cor do botão para verde
        audioPlaying = audioElement; // Atualiza o áudio que está tocando
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        button.textContent = 'Play';
        button.style.backgroundColor = ''; // Remove a cor do botão
        audioPlaying = null; // Remove a referência ao áudio que está tocando
    }
}

// Selecionando todos os botões de reprodução
const playButtons = document.querySelectorAll('.playButton');

// Iterando sobre os botões e adicionando um evento de clique a cada um
playButtons.forEach(button => {
  button.addEventListener('click', function() {
      const audioId = this.getAttribute('data-audio');
      const audio = document.getElementById(audioId);
      toggleAudio(audio, this);
  });
});

