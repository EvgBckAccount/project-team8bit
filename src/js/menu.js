(() => {
  const refs = {
    openModalBtn: document.getElementById('open-menu'),
    closeModalBtn: document.getElementById('close-menu'),
    modal: document.getElementById('mobile-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
