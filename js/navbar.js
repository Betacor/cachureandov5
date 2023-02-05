const headerNav = document.getElementById("header-nav");
headerNav.innerHTML= 
  '<nav class="navbar">'+
    '<button id="bar-toggler"class="navbar-toggler" aria-controls="bar-collapse-l" aria-expanded="false"><span id="navbar-toggler-icon">X</span></button>'+
    '<ul id="bar-collapse-l"  class="bar left " data-visible="false">'+
      '<li><a href="./index.html#quierocomprar"><span aria-hidden="true">Quiero comprar</span></a></li>'+
      '<li><a href="./quierovender.html"><span aria-hidden="true">Quiero vender</span></a></li>'+
    '</ul>'+
    '<div class="logo" ><a href="./index.html">Cachureando</a></div>'+

    '<ul id="bar-collapse-r"class="bar right">'+
      '<li><a href="./contacto.html">Contacto</a></li>'+
      '<li><a href="./encuesta2.html">Encuesta</a></li>'+
      '<li><a href="./index.html"> <img src="./img/lupa(2).png" alt="..." class="icono-nav"></a></li>'+
      '<li><a href="./carrito.html">  <img src="./img/carrito-de-compras(1).png" alt="..." class="icono-nav"></a></li>'+
    '</ul>'+
 '</nav>'
;
const navbarLeft = document.getElementById("bar-collapse-l");
const barToggle = document.getElementById("bar-toggler");

barToggle.addEventListener("click", () => {
  const visibility = navbarLeft.getAttribute("data-visible");
  if(visibility === "false"){
    navbarLeft.setAttribute("data-visible", true);
  }
  else{
    navbarLeft.setAttribute("data-visible", false);
  }
});