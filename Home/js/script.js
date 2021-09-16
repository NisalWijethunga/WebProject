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
