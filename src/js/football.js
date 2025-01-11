
const gameField = document.getElementById("game-field");
const ball = document.getElementById("ball");
const gates = document.getElementById("gates")

gameField.addEventListener('mousemove', (event) => {
    const gameFieldRect = gameField.getBoundingClientRect();

    const x = event.clientX - gameFieldRect.left;
    const y = event.clientY - gameFieldRect.top;
    const maxX = Math.max(0, Math.min(x, gameFieldRect.width - ball.offsetWidth));
    const maxY = Math.max(0, Math.min(y, gameFieldRect.height - ball.offsetHeight));

    ball.style.left = `${maxX}px`;
    ball.style.top = `${maxY}px`;

});