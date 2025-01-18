const equalButton = document.querySelector(`[data-action="equal"]`);
const form = document.querySelector(`#calculator-form`);
const resultText = document.querySelector(`#result-text`);
const radios = document.querySelectorAll('input[name="action"]');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

plus.addEventListener('click', e => {
  const checkedBtn = document.querySelector('.calculator__checked');
  if (checkedBtn) {
    checkedBtn.classList.remove('calculator__checked');
  }
  e.currentTarget.classList.add('calculator__checked');
});

minus.addEventListener('click', e => {
  const checkedBtn = document.querySelector('.calculator__checked');
  if (checkedBtn) {
    checkedBtn.classList.remove('calculator__checked');
  }
  e.currentTarget.classList.add('calculator__checked');
});

multiply.addEventListener('click', e => {
  const checkedBtn = document.querySelector('.calculator__checked');
  if (checkedBtn) {
    checkedBtn.classList.remove('calculator__checked');
  }
  e.currentTarget.classList.add('calculator__checked');
});

divide.addEventListener('click', e => {
  const checkedBtn = document.querySelector('.calculator__checked');
  if (checkedBtn) {
    checkedBtn.classList.remove('calculator__checked');
  }
  e.currentTarget.classList.add('calculator__checked');
});

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
