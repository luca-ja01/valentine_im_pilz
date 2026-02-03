function nextStep(step) {
    const foodOption = document.querySelector('input[name="food"]:checked');
    if (foodOption && foodOption.value === "correct") {
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    } else {
        alert("Versuch's nochmal! 🍕");
    }
}

function openDoor() {
    // 1. Quiz-Karte ausblenden
    document.getElementById('quiz-overlay').classList.add('hidden');
    
    // 2. Tür öffnen & Hintergrund-Schleier entfernen
    document.getElementById('door').classList.add('door-open');
    document.querySelector('.door-scene').style.background = "transparent";

    // 3. Finale Frage einblenden
    setTimeout(() => {
        const main = document.getElementById('main-container');
        main.classList.remove('hidden');
        main.classList.add('fade-in');
    }, 1600);
}

function wrongEmoji() {
    document.getElementById('hint').innerText = "Falsches Emoji! ✨";
}

// "Nein"-Button Logik
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'fixed';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});

function celebrate() {
    alert("❤️ Beste Entscheidung!");
}