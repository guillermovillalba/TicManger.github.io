const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//suavisar al abrrir el burger
function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
}
//Volver a cargar la pagina
function reloadPage() {
    location.reload();
}

//Volver a TicManager
function closePage() {
    window.close();
}