const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const menuDropDown = document.querySelector('.menu_dropdown');

toggleBtn.onclick = function () {
    menuDropDown.classList.toggle('open')

    const isOpen = menuDropDown.classList.contains('open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    let scrollValue = window.scrollY;
    
    // Se o scroll for maior que 100px
    if (scrollValue > 100) {
        header.style.backgroundColor = 'rgba(119, 0, 255, 0.65)'; // Altera a transparência
    } else {
        header.style.backgroundColor = 'rgba(119, 0, 255, 0.9)'; // Transparência inicial
    }
});


