const input = document.querySelector(".check-birthday-input");
const button = document.querySelector(".check-birthday-button");
const validText = document.getElementById("valid-text");
const invalidText = document.getElementById("invalid-text");
validText.style.opacity = 0;
invalidText.style.opacity = 0;

function isLeapYear(birthYear) {

    return (birthYear % 4 === 0 && birthYear % 100 !== 0) || (birthYear % 400 === 0);
}

button.addEventListener('click', () => {
    const birthYear = parseInt(input.value, 10);
    if (!isNaN(birthYear) && birthYear > 0) {
        const birthYear = parseInt(birthYear, 10);
        if (isLeapYear(birthYear)) {
            validText.style.opacity = 1;
        } else {
            invalidText.style.opacity = 1;
        }
    }
});
