const navbar = document.querySelector('.navbar');
const iconMenu = document.querySelector(".icon_menu");
const menu = document.querySelector(".menu");

    iconMenu.addEventListener("click", function(){
        menu.classList.toggle("menu_show");
    })

    window.addEventListener('scroll', function(){
        navbar.classList.toggle('active', window.scrollY >0)
    })