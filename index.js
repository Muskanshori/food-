let icon = document.querySelector(".ham-menu")
let header = document.querySelector(".header-class")
let closed = document.querySelector(".close")
let nav = document.querySelector("nav")

icon.addEventListener("click",(e)=>{
    e.stopPropagation()
    header.classList.add("menu-open")
})

nav.addEventListener("click",(e)=>{
    e.stopPropagation()
})

closed.addEventListener("click",()=>{
    header.classList.remove("menu-open")
})

window.addEventListener("click",()=>{
    header.classList.remove("menu-open")
})