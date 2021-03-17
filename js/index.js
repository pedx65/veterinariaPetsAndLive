function ocultar(event){
    var prueba = document.getElementById('oculto');
    var prueba2 = document.getElementById('mostrar');
    var btn_haga = document.getElementById('btn_haga');
    var btn_atras = document.getElementById('btn_atras');
    var posicion = document.getElementById('parrafo');
       prueba2.style.display="none";
       prueba.style.display = "block";
       btn_haga.style.display='none';
       btn_atras.style.display='block';
       btn_atras.style.marginLeft='44%';	
}
function mostrar(event){
    var prueba = document.getElementById('oculto');
    var prueba2 = document.getElementById('mostrar');
    var btn_haga = document.getElementById('btn_haga');
    var btn_atras = document.getElementById('btn_atras');
    var posicion = document.getElementById('contenido');
       prueba2.style.display="block";
       prueba.style.display = "none";
       btn_haga.style.display='block';
       btn_atras.style.display='none';
       btn_haga.style.marginLeft='32%';	
       

}
