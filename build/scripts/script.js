let popUp = (document.querySelector(".navigation__list"));
let burger = (document.querySelector(".burger__icon"));

burger.addEventListener('click', function () {
    popUp.classList.toggle('navigation__list');
});