 
 const openMenu = document.querySelector(".open");
 const closeMenu = document.querySelector(".close");

 const wrapper = document.querySelector(".sidebar").classList;



 closeMenu.addEventListener("click", ()=>{
   wrapper.toggle("closed");
   wrapper.toggle("opened");
   })
 
openMenu.addEventListener("click", ()=>{
  wrapper.toggle("opened");
 wrapper.toggle("closed");
 })
 
