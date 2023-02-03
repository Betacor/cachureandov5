// let imgTop = document.querySelector(".card-img-top");
const cartas = document.querySelectorAll(".card");  
const modalImg = document.getElementById("img-zoom");
for(let i=0; i<cartas.length; i++){
    cartas[i].addEventListener("click", (event)=>{
        modalImg.src = event.target.attributes.src.value;
    });
}
