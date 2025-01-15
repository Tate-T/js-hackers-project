const formElement = document.querySelector('.guess-number__number');
const inputElement = document.querySelector('.guess-number__number-input');
const btnElement = document.querySelector('.guess-number__btn-guess');
const textElement = document.querySelector('.guess-number__message');

const randomNum = () => Math.round(Math.random() * 100);

btnElement.addEventListener("click", (event) => {
  event.preventDefault();
  const numberValue = Number(inputElement.value);
  const randNum = randomNum();

if (numberValue === randNum) {
    textElement.textContent = `Вітаю, ви вгадали число! ${randNum}`;
    textElement.classList.add("guess-number__message-true");
    textElement.classList.remove("guess-number__message-false");
} else {
    textElement.textContent = `Ви програли, комп'ютер загадав ${randNum}`;
    textElement.classList.add("guess-number__message-false");
    textElement.classList.remove("guess-number__message-true");
}
});
