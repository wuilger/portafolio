const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) =>{
    linkItem.addEventListener("click", () =>{
    document.querySelector(".active").classList.remove("active");
    linkItem.classList.add("active");
 })
})


const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2-acordeon')


h2.forEach((cadaH2 , i) =>{
    h2[i].addEventListener('click', ()=>{
      bloque[i].classList.toggle('activo')
      })
    })
    


