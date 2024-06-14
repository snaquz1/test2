let btnScrollDown = document.querySelector(".header_btn")

btnScrollDown.addEventListener("click", function(){
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
})