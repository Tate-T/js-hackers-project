const equalButton = document.querySelector(`[data-action="equal"]`);
const form = document.querySelector(`#calculator-form`);
const resultText = document.querySelector(`#result-text`);
const radios = document.querySelectorAll('input[name="action"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  const firstInput = document.querySelector(`#first-number`);
  const secondInput = document.querySelector(`#second-number`);
  let selectedAction = null;
  let result;

  for (const radio of radios) {
    if (radio.checked || radio.parentElement.checked) {
      selectedAction = radio.value;
      break;
    }
  }

  if (selectedAction === 'plus') {
    result =
      Number.parseInt(firstInput.value) + Number.parseInt(secondInput.value);
  }
  if (selectedAction === 'minus') {
    result =
      Number.parseInt(firstInput.value) - Number.parseInt(secondInput.value);
  }
  if (selectedAction === 'multiply') {
    result =
      Number.parseInt(firstInput.value) * Number.parseInt(secondInput.value);
  }
  if (selectedAction === 'divide') {
    result =
      Number.parseInt(firstInput.value) / Number.parseInt(secondInput.value);
  }
  const resultString = `${result}`;
  resultText.textContent = resultString.slice(0, 11);
  resultText.style.color = '#000';
});
