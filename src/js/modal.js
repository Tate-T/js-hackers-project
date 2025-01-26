(() => {
    const modalObj = {
        modal: document.querySelector('[data-modal]'),
        close: document.querySelector('[data-modal-close]'),
        closeBtn: document.querySelector('[data-modal-close-btn]')
    }

    modalObj.close.addEventListener('click', toggleModal);
    modalObj.closeBtn.addEventListener('click', toggleModal);

    function toggleModal(event) {
        event.preventDefault()
        modalObj.modal.classList.toggle('is-hidden-modal');
 }
})()

const inputName = document.querySelector(".modal__input");
const userName = document.querySelector(".header__text");
const modalBtn = document.querySelector(".modal__btn");


modalBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const name = inputName.value.trim();
    if (name) {
      userName.textContent = `Вітаємо, ${name}!`;
    } else {
        userName.textContent = `Вітаємо, User!`;
      }
  });
