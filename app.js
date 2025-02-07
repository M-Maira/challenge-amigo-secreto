// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigo = [];

function agregarAmigo (){
    let nombreAmigo = document.getElementById("Amigo");
    let nombreIngresado = nombreAmigo.valeu.trim();
    
    // Validar entrada

    if (nombreIngresado === " "){
        alert ("¡Por favor, ingrese un nombre!");
    } else {
        listaAmigo.push(nombreIngresado);
        return; 
    }
}