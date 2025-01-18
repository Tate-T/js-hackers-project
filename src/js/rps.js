const buttons = document.querySelectorAll('.rps-extended__button');
const resultBtn = document.querySelector('.rps-ComputerC'); // Кнопка внизу
const userScoreElem = document.querySelector('.rps-extended__user');
const pcScoreElem = document.querySelector('.rps-extended__pc');
const drawScoreElem = document.querySelector('.rps-extended__draw');
const resultText = document.querySelector('.rps-extended__text');

let userChoice = 0;
let userScore = 0;
let pcScore = 0;
let drawScore = 0;

const choices = ['Камінь', 'Ножиці', 'Папір', 'Вогонь', 'Вода', 'Повітря'];

// Функція для обробки вибору гравця
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    userChoice = index + 1; // 1: Камінь, 2: Ножиці, 3: Папір, 4: Вогонь, 5: Вода, 6: Повітря
    resultText.textContent = `Ваш вибір: ${choices[index]}`;
  });
});

// Обробка вибору комп'ютера і результат гри
resultBtn.addEventListener('click', () => {
  if (userChoice === 0) {
    resultText.textContent = 'Спершу оберіть свій варіант!';
    return;
  }

  const pcChoice = Math.floor(Math.random() * 6) + 1; // Випадковий вибір комп'ютера (1-6)

  // Логіка визначення переможця
  const winningCombinations = {
    1: [2, 4, 6], // Камінь б’є ножиці, вогонь, повітря
    2: [3, 6],    // Ножиці б’ють папір, повітря
    3: [1, 5],    // Папір б’є камінь, воду
    4: [2, 5],    // Вогонь б’є ножиці, воду
    5: [1, 6],    // Вода б’є камінь, повітря
    6: [3, 4]     // Повітря б’є папір, вогонь
  };

  // Если выбор пользователя выиграл
  if (winningCombinations[userChoice].includes(pcChoice)) {
    userScore++;
    resultText.textContent = `Комп’ютер обрав: ${choices[pcChoice - 1]}. Ви виграли!`;
  } else if (userChoice === pcChoice) { // Ничья
    drawScore++;
    resultText.textContent = `Комп’ютер обрав: ${choices[pcChoice - 1]}. Нічия!`;
  } else { // Проигрыш
    pcScore++;
    resultText.textContent = `Комп’ютер обрав: ${choices[pcChoice - 1]}. Ви програли!`;
  }

  // Обновление счета
  userScoreElem.textContent = userScore;
  pcScoreElem.textContent = pcScore;
  drawScoreElem.textContent = drawScore;
});