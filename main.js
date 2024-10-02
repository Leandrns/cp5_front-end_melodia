const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const menuDropDown = document.querySelector('.menu_dropdown');

toggleBtn.onclick = function () {
    menuDropDown.classList.toggle('open')

    const isOpen = menuDropDown.classList.contains('open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

window.addEventListener('scroll', function() {
    const menu = document.getElementById('header');
    
    // Calcula o valor da opacidade conforme o scroll
    let scrollValue = window.scrollY;

    if (scrollValue > 100) {
        // Quando o scroll for maior que 100px, diminui a opacidade
        menu.style.background = 'linear-gradient(0deg, rgba(121, 0, 255, 0.8), rgba(0, 0, 0, 0.8))';
    } else {
        // Mantém a opacidade inicial, e ajusta conforme o scroll
        let opacity = 0.2 + scrollValue / 500; // Aumenta a opacidade gradualmente
        opacity = opacity > 0.8 ? 0.8 : opacity; // Limita a opacidade em 0.8
        menu.style.background = `linear-gradient(0deg, rgba(121, 0, 255, ${opacity}), rgba(0, 0, 0, ${opacity}))`;
    }
});

