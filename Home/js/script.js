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



/*__________________Swiper What we do_____________________*/

var swiper = new Swiper(".whatwedo_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
    },
  });


  

/*_________________Home4 -  videos ______________________________*/

const home4File = document.getElementById('home4-file'),
home4Button = document.getElementById('home4-button'),
home4Icon = document.getElementById('home4-icon')

function playPause(){ 
if (home4File.paused){
  // Play video
  home4File.play()
  // change the icon
  home4Icon.classList.add('ri-pause-line')
  home4Icon.classList.remove('ri-play-line')
}
else {
  // Pause video
  home4File.pause(); 
  // change the icon
  home4Icon.classList.remove('ri-pause-line')
  home4Icon.classList.add('ri-play-line')
}
}
home4Button.addEventListener('click', playPause)

function finalVideo(){
// Video ends, icon change
home4Icon.classList.remove('ri-pause-line')
home4Icon.classList.add('ri-play-line')
}
// ended, when the video ends
home4File.addEventListener('ended', finalVideo)



