
const field = document.getElementById('game-field');
const ball = document.getElementById('ball');
const scoreboard = document.getElementById('scoreboard');
const goal = document.querySelector('.gates');
let score = 0;


field.addEventListener('click', (event) => {
  const clickX = event.clientX - field.offsetLeft;
  const clickY = event.clientY - field.offsetTop;
  ball.style.top = `${clickY - ball.offsetHeight / 0.15}px`;
  ball.style.left = `${clickX - ball.offsetWidth / 0.55}px`;
  setTimeout(() => {
    checkGoal();
  }, 500);
});


function checkGoal() {
  const ballRect = ball.getBoundingClientRect();
  const goalRect = goal.getBoundingClientRect();

  if (ballRect.top >= goalRect.top && ballRect.left >= goalRect.left && ballRect.right <= goalRect.right && ballRect.bottom <= goalRect.bottom) {
    score++;
    updateScore();
    resetBall();
  }

}

function updateScore() {
  scoreboard.textContent = `Рахунок: ${score}`;
}

function resetBall() {
  ball.style.top = '30px';
  ball.style.left = '30px';
  ball.style.transform = 'translate(-50%, -50%)';
}

