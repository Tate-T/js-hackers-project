const overlayElement = document.querySelector('.header__overlay');
const buttonElement = document.querySelector(`#header-btn`);
const firstVariantElement = document.querySelector(`#first-variant`);
const secondVariantElement = document.querySelector(`#second-variant`);
const thirdVariantElement = document.querySelector(`#third-variant`);
const forthVariantElement = document.querySelector(`#forth-variant`);

buttonElement.firstElementChild.style.transform = 'rotate(0)';

buttonElement.addEventListener('click', e => {
  overlayElement.classList.toggle('is-hidden');
  buttonElement.firstElementChild.style.transform += 'rotate(180deg)';
});

const games = [
  {
    id: 'one2',
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 'two2',
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 'three2',
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 'four2',
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 'five2',
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 'six2',
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 'seven2',
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 'eight2',
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 'nine2',
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 'ten2',
    name: 'Вчений',
    category: 'acquaintance',
  },
];

const newGames = [...games];
const changedGames = [...newGames];

firstVariantElement.addEventListener('click', () => {
  const checkedSections = document.querySelectorAll('.section__deleted');
  for (const section of checkedSections) {
    section.classList.remove('section__deleted');
  }
  buttonElement.firstElementChild.style.transform = 'rotate(0)';
  overlayElement.classList.toggle('is-hidden');
});

secondVariantElement.addEventListener('click', () => {
  const checkedSections = document.querySelectorAll('.section__deleted');
  for (const section of checkedSections) {
    section.classList.remove('section__deleted');
  }
  buttonElement.firstElementChild.style.transform = 'rotate(0)';
  overlayElement.classList.toggle('is-hidden');
  for (let i = 0; i < changedGames.length; i += 1) {
    if (changedGames[i].category !== 'numerical') {
      const deletedSection = document.querySelector(`#${changedGames[i].id}`);
      if (deletedSection) {
        deletedSection.classList.add('section__deleted');
      }
    }
  }
});

thirdVariantElement.addEventListener('click', () => {
  const checkedSections = document.querySelectorAll('.section__deleted');
  for (const section of checkedSections) {
    section.classList.remove('section__deleted');
  }
  buttonElement.firstElementChild.style.transform = 'rotate(0)';
  overlayElement.classList.toggle('is-hidden');
  for (let i = 0; i < changedGames.length; i += 1) {
    if (changedGames[i].category !== 'game') {
      const deletedSection = document.querySelector(`#${changedGames[i].id}`);
      if (deletedSection) {
        deletedSection.classList.add('section__deleted');
      }
    }
  }
});

forthVariantElement.addEventListener('click', () => {
  const checkedSections = document.querySelectorAll('.section__deleted');
  for (const section of checkedSections) {
    section.classList.remove('section__deleted');
  }
  buttonElement.firstElementChild.style.transform = 'rotate(0)';
  overlayElement.classList.toggle('is-hidden');
  for (let i = 0; i < changedGames.length; i += 1) {
    if (changedGames[i].category !== 'acquaintance') {
      const deletedSection = document.querySelector(`#${changedGames[i].id}`);
      if (deletedSection) {
        deletedSection.classList.add('section__deleted');
      }
    }
  }
});
