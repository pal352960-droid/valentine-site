const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const main = document.getElementById("main");
const wrong = document.getElementById("wrong");
const finalScreen = document.getElementById("final");

let escapeCount = 0;

// Move NO button
function moveNo() {
    const area = document.querySelector(".button-area");

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNo);

// Mobile touch escape (first few times)
noBtn.addEventListener("touchstart", function(e){
    escapeCount++;
    if (escapeCount < 5) {
        e.preventDefault();
        moveNo();
    }
});

// If NO finally clicked
noBtn.addEventListener("click", () => {
    main.classList.add("hidden");
    wrong.classList.remove("hidden");

    setTimeout(() => {
        wrong.classList.add("hidden");
        showFinal();
    }, 2000);
});

// YES clicked
yesBtn.addEventListener("click", showFinal);

function showFinal() {
    main.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    // Firework bursts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 120,
                origin: { y: 0.6 }
            });
        }, i * 400);
    }

    // Falling hearts & roses colors
    setInterval(() => {
        confetti({
            particleCount: 8,
            spread: 60,
            origin: { x: Math.random(), y: 0 },
            colors: ['#ff2e63', '#ff0000', '#ffd700', '#ff69b4']
        });
    }, 300);
}
