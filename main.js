gsap.from('.img-1', 1.2, {opacity:0 , y:-150, delay:0.5})
gsap.from('.img-2', 1.2, {opacity:0 , y:-150, delay:1.5})
gsap.from('.img-3', 1.2, {opacity:0 , y:300, delay:2.5})
gsap.from('.img-4', 1.2, {opacity:0 , y:350, delay:3.5})
gsap.from('.img-5', 1.2, {opacity:0 , y:250, delay:4.5})
gsap.from('.img-6', 1.2, {opacity:0 , x:150, delay:5.5})
gsap.from('.img-7', 1.2, {opacity:0 , x:150, delay:6.5})

// Text-content
gsap.from('h4', 1.2, {opacity:0 , x:-150, delay:5})
gsap.from('h2', 1.2, {opacity:0 , x:-150, delay:5.5})
gsap.from('p', 1.2, {opacity:0 , x:-150, delay:6})
gsap.from('#btn', 1.2, {opacity:0 , x:-150, delay:6.5})
// =========================

let menu = document.querySelector('.nav')
let burgerTab = document.getElementById('burger')
let closeBtn = document.getElementById('close')


burgerTab.addEventListener('click' , function(){
    menu.classList.add('active')
    burgerTab.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener('click' , function(){
    menu.classList.remove('active')
    burgerTab.style.display = "block"
    closeBtn.style.display = "none"

})