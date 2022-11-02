const logo = document.querySelector('.logo')
const posterTwo = document.querySelector('.poster-two')
const posterTwoImage = document.querySelector('.poster-two .poster')
document.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    if(scroll > 0){
        logo.style.backgroundColor = "rgba(0, 0, 0, 1)";
    }else{
        logo.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
})
posterTwo.addEventListener('mouseover', ()=>{
    // posterTwoImage.setAttribute('src', './assets/img/poster-pantera-negra2.webp')
})
