const menuBtn = document.querySelector('.fa-bars')
        closeBtn= document.querySelector('.fa-xmark')
        nav = document.querySelector('.nav')


menuBtn.addEventListener('click',()=>{
    nav.classList.add('show-nav')
    closeBtn.classList.add('show-close-btn')
    menuBtn.classList.add('hide-menu-btn')
})


closeBtn.addEventListener('click',()=>{
    nav.classList.remove('show-nav')
    closeBtn.classList.remove('show-close-btn')
    menuBtn.classList.remove('hide-menu-btn')
})


nav.addEventListener('click',()=>{
    nav.classList.remove('show-nav')
    closeBtn.classList.remove('show-close-btn')
    menuBtn.classList.remove('hide-menu-btn')
})









