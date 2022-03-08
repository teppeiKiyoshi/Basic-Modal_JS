let openModal = document.getElementById('modalBtn');
let closeModal = document.getElementsByClassName('closeBtn')[0];
let modal = document.getElementById('basicModal');

// CREATE EVENTS
openModal.addEventListener('click', openModalFunc);
function openModalFunc() {
  modal.style.display = 'block';
}

closeModal.addEventListener('click', closeModalFunc);
function closeModalFunc() {
  modal.style.display = 'none';
}

window.addEventListener('click', outsideClick);
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
