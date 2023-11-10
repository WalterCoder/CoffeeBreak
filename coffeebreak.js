//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click",() =>{
hamburger.classList.remove("active");
navMenu.classList.remove("active");

  }))
//GALLERY

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function OpenFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    
  }

  function closeFullImg(){
    fullImgBox.style.display ="none";
  }

