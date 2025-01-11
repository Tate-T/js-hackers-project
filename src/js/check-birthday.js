
const yearInput = document.getElementById("yearInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}



checkButton.addEventListener("click", () => {
    const year = parseInt(yearInput.value, 10);

    if (!isNaN(year) && year > 0) {
        if (isLeapYear(year)) {
            result.textContent = "Ви народилися у високосний рік!";
            result.style.color = "green";
        } else {
            result.textContent = "Ви народилися у не високосний рік!";
            result.style.color = "red";
        }
    } 
});