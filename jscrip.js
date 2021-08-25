const hamburger= document.querySelector('.hamburger');
const menu= document.querySelector('.menu-hamburgesa');

hamburger.addEventListener("click", ()=>{
    // alert("click")
    menu.classList.toggle("show");
})

window.addEventListener("click", e =>{
    if(menu.classList.contains("show")&& e.target != menu &&  e.target != hamburger){
        menu.classList.toggle("show");
    }

})