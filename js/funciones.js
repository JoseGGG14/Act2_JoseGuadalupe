/*Funcion que se ejecuta cada vez que se pulsa sobre el boton "enviar"*/
function enviar(e) {
 
    // obtenemos todos los radio seleccionados
    var preguntas=document.querySelectorAll("input[type=radio]:checked");
 
    // si estan todos seleccionados...
    if(preguntas.length==totalPreguntas) {
 
        totalEncuestas++;
        document.getElementById("error").innerHTML="";
 
        // recorremos cada una de las respuestas
        preguntas.forEach(function(pregunta) {
 
            // guardamos en un array bidimensional la respuesta
            resultadoEncuesta[pregunta.name][pregunta.value]++;
 
            // desmarcamos el check
            pregunta.checked=false;
        });
        mostrarResultado();
    }else{
        document.getElementById("error").innerHTML="Selecciona todos los valores...";
    }
 
    // cancelamos el evento para que no continue
    e.preventDefault();
}
 
/**
 * Funcion para inidializar el array bidimensional
 */
function inicializarArrayResultados() {
    for(var i=1;i<=totalPreguntas;i++) {
        resultadoEncuesta["p"+i]=[0,0,0];
    }
}
 
/**
 * Simple funcion que muestra los resultados en cada votacion
 */
function mostrarResultado() {
    resultado="";
    resultado+="<h3>De un Total de "+totalEncuestas+" Encuestados...</h3>";
    for(var i=1;i<=totalPreguntas;i++) {
        resultado+="<div>Pregunta numero: " +i+ "<br> Si  " +resultadoEncuesta["p"+i][0]+"<br> No:  "+resultadoEncuesta["p"+i][1]+"<br> No es una variable:  "+resultadoEncuesta["p"+i][2]+"<div><br>";
    }
    document.getElementById("resultado").innerHTML=resultado;
}