/*________________ Show Menu __________________*/

const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close')

/*_________ Menu Show ____________________*/
/* validate if constant exists */

if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*_________ Menu Hidden _________________________*/
/* validate if constant exists */

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}




/*____________Remove Menu - Mobile _______________*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*_________________Change Background Header __________*/

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


