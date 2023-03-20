const create = document.querySelector('#create');
const formOuter = document.querySelector('.formOuter');

create.addEventListener('click', displayForm);
function displayForm () {
    formOuter.classList.add('open');
}

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    formOuter.classList.remove('open');
});
window.addEventListener('keyup', function esc(e){
    if (e.key == 'Escape') formOuter.classList.remove('open');
});
window.addEventListener('click', function escape(e){
    if (e.target.classList.contains('formOuter') && e.target.classList.contains('open')) formOuter.classList.remove('open');
});