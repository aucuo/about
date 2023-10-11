AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

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
        document.body.style.overflowY = "hidden";
        logoIcon.forEach(function (path) {
            path.style.fill = '#292D32';
        });
    });

    // закрытие бургера
    burgerIconClose.addEventListener('click', function () {
        header.style.background = "none";
        burgerIconClose.style.display = "none";
        burgerIcon.style.display = "block";
        document.body.style.overflowY = "auto";
        headerMenu.style.display = "none";
        checkScroll();
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
