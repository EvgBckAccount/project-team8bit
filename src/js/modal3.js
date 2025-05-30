(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal3-open], [data-modal4-open]"),
    closeModalBtn: document.querySelector("[data-modal3-close]"),
    modal: document.querySelector("[data-modal3]"),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();