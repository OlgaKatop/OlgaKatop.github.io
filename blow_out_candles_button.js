document.getElementById("blow-out-button").addEventListener("click", function() {
    // Extinguish candles
    this.disabled = true;
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('extinguished');
    });

    // Add confetti after a small delay
    setTimeout(() => {
        createConfetti();
    }, 500); // Start confetti after 500ms delay for better effect
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    document.body.appendChild(confettiContainer);

    const audio = document.getElementById('voice-message');
        audio.play();

    for (let i = 0; i < 300; i++) { // Create 100 confetti pieces
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random slow speed (4-8s)
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Random delay before it starts falling

        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after animation is complete
    setTimeout(() => {
        
        confettiContainer.remove();
    }, 8000); // Match the maximum duration of animation (8s)
}

function getRandomColor() {
    const colors = ['#ff0', '#ff6347', '#00ff00', '#00bfff', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
}
