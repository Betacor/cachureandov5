// mantiene ocultos el aviso de éxito
$( document ).ready(function(){
    $("#alerta-exito").hide();
  });
  
  $("#btnRegistra").click(function(){
     $("#alerta-exito").show("slow");
  });
  