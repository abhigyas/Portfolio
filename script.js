const aboutLink = document.querySelector('.about-link')
aboutLink.addEventListener('click', () =>{
    document.querySelector('.about-page').scrollIntoView({ behavior: 'smooth' });
})
const experienceLink = document.querySelector('.experience-link')
experienceLink.addEventListener('click', () =>{
    document.querySelector('.experience-page').scrollIntoView({ behavior: 'smooth' });
})
const contactLink = document.querySelector('.contact-link')
contactLink.addEventListener('click', () =>{
    document.querySelector('.contact-page').scrollIntoView({ behavior: 'smooth' });
})
function toggleMenu(){
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
}
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)