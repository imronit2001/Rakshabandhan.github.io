const trigger = document.querySelector('#close');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('#navbar-close');
const menu = document.querySelector('#menu-bar')

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})
menu.addEventListener('click', function(){
    closeModal();
})
function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}