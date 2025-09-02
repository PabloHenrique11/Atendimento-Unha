const form = document.querySelector(".formulario")
const mask = document.querySelector(".sombra-2")

function showform(){
    form.style.left = "40%"
    form.style.transform = "translateX (-50%)"
    mask.style.visibility = "visible"
}

function annulform(){
    form.style.top = "30%"
    form.style.left = "-300px"
    mask.style.visibility = "hidden"
}