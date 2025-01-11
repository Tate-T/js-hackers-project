const buttons = document.querySelectorAll('.rps__button');
const resultBtn = document.querySelector('.rps-ComputerC');
const userScoreElem = document.querySelector('.rps-user');
const pcScoreElem = document.querySelector('.rps-pc');
const drawScoreElem = document.querySelector('.rps-draw'); 
const resultText = document.querySelector('.rps-text');

let userChoice = 0;
let userScore = 0;
let pcScore = 0;
let drawScore = 0;

// Функція для обробки вибору гравця
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    userChoice = index + 1; // 1: Камінь, 2: Ножиці, 3: Папір
    resultText.textContent = `Ваш вибір: ${['Камінь', 'Ножиці', 'Папір'][index]}`;
  });
});

// Обробка вибору комп'ютера і результат гри
resultBtn.addEventListener('click', () => {
  if (userChoice === 0) {
    resultText.textContent = 'Спершу оберіть свій варіант!';
    return;
  }

  const pcChoice = Math.floor(Math.random() * 3) + 1; // Випадковий вибір комп'ютера (1, 2, 3)
  const choices = ['Камінь', 'Ножиці', 'Папір'];

  // Логіка визначення переможця
  if (
    (userChoice === 1 && pcChoice === 2) || // Камінь б’є ножиці
    (userChoice === 2 && pcChoice === 3) || // Ножиці б’ють папір
    (userChoice === 3 && pcChoice === 1)    // Папір б’є камінь
  ) {
    userScore++;
    resultText.textContent = `Комп'ютер обрав: ${choices[pcChoice - 1]}. Ви виграли!`;
  } else if (userChoice === pcChoice) {
    drawScore++; 
    resultText.textContent = `Комп'ютер обрав: ${choices[pcChoice - 1]}. Нічия!`;
  } else {
    pcScore++;
    resultText.textContent = `Комп'ютер обрав: ${choices[pcChoice - 1]}. Ви програли!`;
  }

  
  userScoreElem.textContent = userScore;
  pcScoreElem.textContent = pcScore;
  drawScoreElem.textContent = drawScore; 
});