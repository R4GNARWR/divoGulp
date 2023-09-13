const headerMenuButton = document.querySelector('.header-menu__button');
const menu = document.querySelector('nav.nav');
const menuLinks = document.querySelectorAll('.nav__left-list li a')

function toggleClass(element, className) {
    if(element.classList.contains(className))
    {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}
function menuOpenClose() {
    if(headerMenuButton.classList.contains('animate')) {
        headerMenuButton.classList.remove('animate');
        headerMenuButton.classList.add('animate-back');
    } else {
        headerMenuButton.classList.add('animate');
        headerMenuButton.classList.remove('animate-back');
    }
    if(menu) toggleClass(menu, 'active');
    
    setTimeout(() => {
        toggleClass(headerMenuButton, 'active');
    }, 400)
    setTimeout(() => {
    }, 500)
}
if(headerMenuButton)
{
    headerMenuButton.addEventListener('click', () =>{
        menuOpenClose();
    })
}
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuOpenClose();
    })
})
Fancybox.defaults.closeButton = false;

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
