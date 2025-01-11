const input = document.querySelector(".time-calculator-input");
const result = document.querySelector(".time-calculator-time");
const form = document.querySelector(".time-calculator-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const value = parseInt(input.value);

  if (!isNaN(value) && value >= 0) {
    const days = Math.floor(value / 86400);
    const hours = Math.floor((value % 86400) / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    result.textContent = `${days} дн. ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    result.textContent = "Будь ласка, введіть коректне число.";
  }

  input.value = ""; // Очищаем поле ввода
});