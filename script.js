document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var headerMenu = document.querySelector('.header__menu');
    var logoIcon = document.querySelectorAll('.header__logo-icon path');
    var burgerIcon = document.querySelector('.header__burger-icon');
    var burgerIconClose = document.querySelector('.header__burger-icon--close');

    checkScroll();

    // якоря
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            header.style.background = "none";
            burgerIconClose.style.display = "none";
            burgerIcon.style.display = "block";
            headerMenu.style.top = "-100vh";
            setTimeout(function () {
                headerMenu.style.display = "none";
            }, 300);
            checkScroll();
            document.body.style.overflowY = "auto";
            anchor(e)
        });
    });
    function anchor(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    }

    // открытие бургера
    burgerIcon.addEventListener('click', function () {
        header.style.background = "white";
        burgerIconClose.style.display = "block";
        burgerIcon.style.display = "none";
        headerMenu.style.display = "flex";
        headerMenu.style.top = "0";
        logoIcon.forEach(function (path) {
            path.style.fill = '#292D32';
        });
        document.body.style.overflowY = "hidden";
    });

    // закрытие бургера
    burgerIconClose.addEventListener('click', function () {
        header.style.background = "none";
        burgerIconClose.style.display = "none";
        burgerIcon.style.display = "block";
        headerMenu.style.top = "-100vh";
        setTimeout(function () {
            headerMenu.style.display = "none";
        }, 300);
        checkScroll();
        document.body.style.overflowY = "auto";
    });

    // цвет менюхи
    window.addEventListener('scroll', checkScroll);
    function checkScroll() {
        var windowHeight = window.innerHeight;
        var burgerIconPaths = document.querySelectorAll('.header__burger-icon path');
        if (window.scrollY >= windowHeight - 130) {
            header.style.background = "white";
            logoIcon.forEach(function (path) {
                path.style.fill = '#292D32';
            });
            burgerIconPaths.forEach(function (path) {
                path.style.fill = '#292D32';
            });
        } else {
            header.style.background = "none";
            logoIcon.forEach(function (path) {
                path.style.fill = 'white';
            });
            burgerIconPaths.forEach(function (path) {
                path.style.fill = 'white';
            });
        }
    }
});
