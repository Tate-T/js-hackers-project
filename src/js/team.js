const listElement = document.querySelector('#team-list');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

listElement.style.marginLeft = `0px`;
let listMargin = Number.parseInt(listElement.style.marginLeft);

rightArrow.addEventListener('click', () => {
  if (listMargin < -570 || listMargin === -570) {
  } else {
    listMargin -= 190;
    listElement.style.marginLeft = `${listMargin}px`;
    const checkedLine = document.querySelector('.team__checked');
    checkedLine.classList.remove('team__checked');
    const nextCheckedLine = checkedLine.nextElementSibling;
    nextCheckedLine.classList.add('team__checked');
  }
});

leftArrow.addEventListener('click', () => {
  if (listMargin > 0 || listMargin === 0) {
  } else {
    listMargin += 190;
    listElement.style.marginLeft = `${listMargin}px`;
    const checkedLine = document.querySelector('.team__checked');
    checkedLine.classList.remove('team__checked');
    const nextCheckedLine = checkedLine.previousElementSibling;
    nextCheckedLine.classList.add('team__checked');
  }
});
