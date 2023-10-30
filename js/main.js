const navbarEl=document.querySelector('.navbar');
const barEl=document.querySelector('.fa-bars');

barEl.addEventListener('click',()=>{
    navbarEl.classList.toggle('show');
})