const firstButton = document.querySelector('#first-button');
const secondButton = document.querySelector('#second-button');
const thirdButton = document.querySelector('#third-button');
const forthButton = document.querySelector('#forth-button');
const fifthButton = document.querySelector('#fifth-button');
const sixthButton = document.querySelector('#sixth-button');
const seventhButton = document.querySelector('#seventh-button');
const eighthButton = document.querySelector('#eighth-button');
const ninthButton = document.querySelector('#ninth-button');
const castButton = document.querySelector('#cast-button');
const scientistCont = document.querySelector('.scientist__cont');

const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 'one',
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 'two',
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 'three',
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 'four',
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 'five',
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 'six',
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 'seven',
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 'eight',
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 'nine',
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 'ten',
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 'eleven',
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 'twelve',
  },
];
const listELement = document.createElement('ul');

const newScientists = [...scientists];
let changedScientists = [...newScientists];

const generateScientistCart = function (scientists) {
  listELement.classList.add('scientist__people');

  for (const scientist of scientists) {
    listELement.insertAdjacentHTML(
      'beforeend',
      `<li id="${scientist.id}" class="scientist__person">
          <h3 class="scientist__name">${scientist.name} ${scientist.surname}</h3>
          <p class="scientist__years">${scientist.born}-${scientist.dead}</p>
    </li>`
    );
  }
  scientistCont.prepend(listELement);
};

generateScientistCart(scientists);

firstButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');
  for (let i = 0; i < changedScientists.length; i += 1) {
    if (changedScientists[i].born > 1800 && changedScientists[i].born < 1901) {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

secondButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (
      changedScientists[i].name === 'Albert' &&
      changedScientists[i].surname === 'Einstein'
    ) {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

thirdButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  const sortedScientists = changedScientists.sort(function (a, b) {
    return a.surname.localeCompare(b.surname);
  });
  console.log(sortedScientists);

  listELement.innerHTML = '';
  for (const scientist of sortedScientists) {
    listELement.insertAdjacentHTML(
      'beforeend',
      `<li id="${scientist.id}" class="scientist__person">
            <h3 class="scientist__name">${scientist.name} ${scientist.surname}</h3>
            <p class="scientist__years">${scientist.born}-${scientist.dead}</p>
      </li>`
    );
  }
});

forthButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (changedScientists[i].surname[0] === 'C') {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

fifthButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  const sortedScientists = changedScientists.sort(function (a, b) {
    const difA = a.dead - a.born;
    const difB = b.dead - b.born;
    return difA - difB;
  });
  console.log(sortedScientists);

  listELement.innerHTML = '';
  for (const scientist of sortedScientists) {
    listELement.insertAdjacentHTML(
      'beforeend',
      `<li id="${scientist.id}" class="scientist__person">
            <h3 class="scientist__name">${scientist.name} ${scientist.surname}</h3>
            <p class="scientist__years">${scientist.born}-${scientist.dead}</p>
      </li>`
    );
  }
});

sixthButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (changedScientists[i].name[0] === 'A') {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

seventhButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  let theLaterestBorn = 0;
  for (const scientist of changedScientists) {
    if (scientist.born > theLaterestBorn) {
      theLaterestBorn = scientist.born;
    }
  }

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (theLaterestBorn === changedScientists[i].born) {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

eighthButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  let theLongestLived = 0;
  let theFewestLived = 2000;

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (
      changedScientists[i].dead - changedScientists[i].born >
      theLongestLived
    ) {
      theLongestLived = changedScientists[i].dead - changedScientists[i].born;
    }
    if (
      changedScientists[i].dead - changedScientists[i].born <
      theFewestLived
    ) {
      theFewestLived = changedScientists[i].dead - changedScientists[i].born;
    }
  }

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (
      theFewestLived ===
        changedScientists[i].dead - changedScientists[i].born ||
      theLongestLived === changedScientists[i].dead - changedScientists[i].born
    ) {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

ninthButton.addEventListener('click', e => {
  e.currentTarget.classList.add('scientist__checked');

  for (let i = 0; i < changedScientists.length; i += 1) {
    if (changedScientists[i].surname[0] === changedScientists[i].name[0]) {
    } else {
      const itemDeleted = document.querySelector(`#${changedScientists[i].id}`);
      itemDeleted.classList.add('scientist__deleted');
      changedScientists.splice(i, 1);
      i -= 1;
    }
  }
});

castButton.addEventListener('click', e => {
  changedScientists = [...scientists];
  listELement.innerHTML = '';
  for (const scientist of changedScientists) {
    listELement.insertAdjacentHTML(
      'beforeend',
      `<li id="${scientist.id}" class="scientist__person">
            <h3 class="scientist__name">${scientist.name} ${scientist.surname}</h3>
            <p class="scientist__years">${scientist.born}-${scientist.dead}</p>
      </li>`
    );
  }

  const checkedButtons = document.querySelectorAll('.scientist__checked');
  for (const btn of checkedButtons) {
    btn.classList.remove('scientist__checked');
  }
});
