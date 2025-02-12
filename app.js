// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigo = [];

function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo");
    let nombreIngresado = nombreAmigo.value.trim();
    console.log(nombreIngresado)
    // Validar entrada

    if (nombreIngresado == ""){
        asignarTextoElemento ("h2", "¡Por favor, ingrese un nombre!");
    } else {
        listaAmigo.push(nombreIngresado);
        return listaAmigo; 
        
    }
    console.log(listaAmigo) 
}
console.log(listaAmigo)
// Función limpiar campo de entrada

function limpiarCampo (){
    document.querySelector("#Amigo") = " ";
}

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}