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

const form = document.querySelector(".modal__form");
const inputName = document.querySelector(".modal__input");
const userName = document.querySelector("#user-name");
const modal = document.querySelector('[data-modal]');
const modalClose = document.querySelector('[data-modal-close]');

form.addEventListener("submit", (event) => {
event.preventDefault()
userName.textContent = inputName.value;
})


