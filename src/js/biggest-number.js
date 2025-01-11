const inputs = document.querySelectorAll(".biggestNum-input");
const paragraph = document.querySelector(".biggestNum-paragraph");

const maxNumber = () => {
    const numbers = Array.from(inputs).map(input => Number(input.value) || 0);
    const maxNum = Math.max(...numbers);
    paragraph.textContent = `Найбільше число, яке ви ввели: ${maxNum}`;
};

// Добавляем обработчики событий на все инпуты
inputs.forEach(input => {
    input.addEventListener("input", maxNumber);
});