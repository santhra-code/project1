// scripts.js
//navigation
function togglemenu()
{
    const togglemenu = document.querySelector(".togglemenu");
    const navigation = document.querySelector(".navigation");
    togglemenu.classList.toggle("active");
    navigation.classList.toggle("active");



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');


});
}
//end navigation