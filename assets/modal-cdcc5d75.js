(()=>{const t={modal:document.querySelector("[data-modal]"),close:document.querySelector("[data-modal-close]"),closeBtn:document.querySelector("[data-modal-close-btn]")};t.close.addEventListener("click",e),t.closeBtn.addEventListener("click",e);function e(l){l.preventDefault(),t.modal.classList.toggle("is-hidden-modal")}})();const n=document.querySelector(".modal__input"),o=document.getElementById("#user-name-modal");document.querySelector("[data-modal]");document.querySelector("[data-modal-close]");form.addEventListener("submit",t=>{t.preventDefault();const e=n.value.trim();e&&(o.textContent=e)});modalBtn.addEventListener("click",t=>{t.preventDefault();const e=n.value.trim();e?o.textContent=`Вітаємо, ${e}!`:o.textContent="Вітаємо, User!"});
//# sourceMappingURL=modal-cdcc5d75.js.map
