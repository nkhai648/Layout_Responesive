const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(nav && toggle) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// TODO: POPUP
const btnOpenVideo = document.querySelectorAll('.islands__video-content')
const islandsPopup = document.getElementById('popup') 
const btnCloseVideo = document.getElementById('popup-close')

function popUp() {
    islandsPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', popUp))


btnCloseVideo.addEventListener('click',()=>{
    islandsPopup.classList.remove('show-popup')
})

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

// TODO: GSAP 
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation() {
    gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y:-20})
    gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.islands__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.islands__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})
    islandsPopup.classList.remove('show-popup')
}
controlImg.forEach(c => c.addEventListener('click', scrollAnimation))