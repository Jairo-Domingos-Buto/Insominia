var hamburger = document.getElementById('hamburger')
var nav = document.getElementById('links')

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
})
