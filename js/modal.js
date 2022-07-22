(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", SlideIn);
  refs.closeModalBtn.addEventListener("click", SlideOut);

  function SlideIn() {
    refs.modal.className = "modal_container in";
  }
  function SlideOut() {
    refs.modal.classList.add("out");
  }
})();
