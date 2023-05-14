const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.popup');
const closeModal = document.querySelector('.popup__close');

openModal.addEventListener('click', function () {
    modal.classList.toggle('open');
    document.body.classList.toggle('lock');
});
closeModal.addEventListener('click', function () {
    modal.classList.toggle('open');
    document.body.classList.toggle('lock');
});
