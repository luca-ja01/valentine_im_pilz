// Funktion für den ersten Klick (von Step 0 zu Step 1)
function goToStep1() {
    document.getElementById('step0').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
}

// Quiz-Logik: Von Step 1 zu Step 2
function nextStep() {
    const option = document.querySelector('input[name="food"]:checked');
    if (option && option.value === "correct") {
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    } else if (option) {
        alert("Knapp daneben! Überleg nochmal... ❤️");
    } else {
        alert("Bitte wähle eine Antwort aus! ✨");
    }
}

// Die Herzstück-Funktion: Tür öffnen & Licht anschalten
function openDoor() {
    const quiz = document.getElementById('quiz-overlay');
    const door = document.getElementById('door');
    const doorScene = document.querySelector('.door-scene');
    const bg = document.querySelector('.apartment-view');

    // 1. Quiz ausblenden
    if (quiz) {
        quiz.style.opacity = '0';
        setTimeout(() => { quiz.style.display = 'none'; }, 500);
    }

    // 2. Tür-Animation & Licht-Effekt
    if (door) door.classList.add('door-open');
    if (bg) bg.classList.add('warm-glow'); // Hier wird das Flackern aktiviert
    
    if (doorScene) {
        doorScene.style.background = "transparent";
        doorScene.style.pointerEvents = "none";
    }

    // 3. Nach der Tür-Animation die Valentins-Frage zeigen
    setTimeout(() => {
        const main = document.getElementById('main-card');
        if (main) {
            main.classList.remove('hidden');
            main.style.display = 'block';
            main.classList.add('fade-in');
        }
    }, 2000); 
}

function wrongEmoji() {
    document.getElementById('hint').innerText = "Da würde sich Eseli aber wundern...";
}

// "Nein"-Button Logik
const noButton = document.getElementById('noButton');
const moveBtn = () => {
    const padding = 20; 
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.transition = "all 0.2s ease";
};

if (noButton) {
    noButton.addEventListener('mouseover', moveBtn);
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveBtn();
    });
}

// Finale Feier
function celebrate() {
    alert("Du bist in unserem Pilz angekommen. Auf dich wartet schon ein schöner Abend und unser erster Valentinstag in einer gemeinsamen Wohnung❤️");

    // Zurück zur effizienten Methode: Alles ausblenden, was im Weg ist
    const overlays = document.querySelectorAll('.overlay-container, .door-scene');
    overlays.forEach(el => el.style.display = 'none');

    // Die finale Liebesbotschaft erstellen und anzeigen
    const loveHeader = document.createElement('div');
    loveHeader.id = 'final-love-message';
    loveHeader.innerText = "Ich liebe dich mein Schatz ❤️";
    document.body.appendChild(loveHeader);
    
    // Hintergrundbild statisch anpassen
    const bg = document.querySelector('.apartment-view');
    if (bg) {
        bg.style.filter = "none";
        bg.style.transform = "scale(1.02)"; // Ein kleiner, fester Zoom für den Abschluss
    }
}

