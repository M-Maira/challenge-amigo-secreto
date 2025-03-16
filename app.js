// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigo = [];

function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo");
    let nombreIngresado = nombreAmigo.value;
    console.log(nombreIngresado);
    // Validar entrada

    if (!nombreIngresado){
        asignarTextoElemento ("h2", "¡Por favor, ingrese un nombre!");
    } else {
        listaAmigo.push(nombreIngresado);
        limpiarCampo();
        actualizarLista();
        return listaAmigo;        
    }
     
}

console.log(listaAmigo)
// Función limpiar campo de entrada

function limpiarCampo (){
    document.querySelector("#amigo").value = "";
    
}

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función actualizar lista

function actualizarLista(){
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML="";
    
    for(let i =0; i< listaAmigo.length; i++){
        let item = document.createElement("li");
        item.textContent= listaAmigo[i];
        lista.appendChild(item);
    }
}