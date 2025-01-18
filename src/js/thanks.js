(() => {
    const refs = {
        openModalThanks: document.querySelector('[data-thanks-open]'),
        closeModalThanks: document.querySelector('[data-thanks-close]'),
        modal: document.querySelector('[data-thanks]'),
    }

    refs.openModalThanks.addEventListener('click', toggleModal)
    refs.closeModalThanks.addEventListener('click', toggleModal)

    function toggleModal(event) {
        refs.modal.classList.toggle('is-hidden')
        refs.closeModalThanks.preventDefault()
    }
})()