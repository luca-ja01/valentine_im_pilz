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
    document.getElementById('hint').innerText = "Falsches Emoji! ✨";
}

// "Nein"-Button Logik (jetzt auch für Touch-Events am Handy)
const noButton = document.getElementById('noButton');
const moveBtn = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'fixed';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
    noButton.style.zIndex = "1000";
};
noButton.addEventListener('mouseover', moveBtn);
noButton.addEventListener('touchstart', moveBtn); // Wichtig für's Handy!

function celebrate() {
    alert(" Du bist in unserem Pilz angekommen. Auf dich wartet schon ein schöner Abend und unser erster Valentinstag in einer Wohnung❤️");
}