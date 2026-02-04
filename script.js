// Funktion für den ersten Klick (von Step 0 zu Step 1)
function goToStep1() {
    document.getElementById('step0').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
}

// Funktion für das Quiz (von Step 1 zu Step 2)
function nextStep() {
    const option = document.querySelector('input[name="food"]:checked');
    
    if (option && option.value === "correct") {
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    } else if (option) {
        // Wenn etwas falsches gewählt wurde
        alert("Knapp daneben! Überleg nochmal... ❤️");
    } else {
        // Wenn gar nichts ausgewählt wurde
        alert("Bitte wähle eine Antwort aus! ✨");
    }
}

function openDoor() {
    const quiz = document.getElementById('quiz-overlay');
    if (quiz) {
        quiz.style.opacity = '0';
        setTimeout(() => { quiz.style.display = 'none'; }, 500);
    }

    const door = document.getElementById('door');
    // WICHTIG: Hier muss exakt die Klasse aus deinem HTML stehen
    const doorScene = document.querySelector('.door-scene');
    
    if (door) door.classList.add('door-open');
    if (doorScene) {
        doorScene.style.background = "transparent";
        doorScene.style.pointerEvents = "none"; // Damit man durchklicken kann
    }

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

// "Nein"-Button Logik mit Sicherheitsbereich
const noButton = document.getElementById('noButton');
const moveBtn = () => {
    // Sicherheitsabstand zum Rand in Pixeln
    const padding = 20; 
    
    // Wir berechnen die verfügbare Fläche minus der Button-Größe und dem Padding
    // offsetWidth/Height gibt uns die echte Größe des Buttons
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    // Zufällige Position innerhalb der sicheren Grenzen (mindestens so groß wie das Padding)
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.zIndex = "1000";
    
    // Optional: Ein kleiner Übergang, damit er nicht hart wegploppt
    noButton.style.transition = "all 0.2s ease";
};

noButton.addEventListener('mouseover', moveBtn);
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Verhindert, dass der Klick am Handy trotzdem ausgeführt wird
    moveBtn();
});

function celebrate() {
    alert("Du bist in unserem Pilz angekommen. Auf dich wartet schon ein schöner Abend und unser erster Valentinstag in einer gemeinsamen Wohnung❤️");

    // 1. Alle Overlays und die Tür-Szene komplett entfernen
    const overlays = document.querySelectorAll('.overlay-container, .door-scene');
    overlays.forEach(el => el.style.display = 'none');

    // 2. Das finale Feld erstellen
    const loveHeader = document.createElement('div');
    loveHeader.id = 'final-love-message';
    loveHeader.innerText = "Ich liebe dich mein Schatz ❤️";
    
    // 3. Dem Body hinzufügen
    document.body.appendChild(loveHeader);
    
    // 4. Den Hintergrund für den vollen Fokus leicht optimieren
    const bg = document.querySelector('.apartment-view');
    bg.style.filter = "none"; // Blur entfernen, falls vorhanden
    bg.style.transform = "scale(1.02)"; // Ganz leichter Zoom-Effekt für Dynamik
    bg.style.transition = "all 2s ease";
}