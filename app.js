// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array

let listaAmigo = [];
let sorteoRealizado = false; //para saber el estado del juego

//Función para agregar amigos

function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo");
    let nombreIngresado = nombreAmigo.value;
    
   
    // Validar entrada

    if (!nombreIngresado){
        alert ("¡Por favor, ingrese un nombre!");
    } else {
        //Convertir el primer caracter en mayúscula
        nombreIngresado = nombreIngresado.charAt(0).toUpperCase()+nombreIngresado.slice(1)
        //Agregar nombre a la lista
        listaAmigo.push(nombreIngresado);
        limpiarCampo();
        actualizarLista();       
        return listaAmigo;        
    }
    
}

// Función limpiar campo de entrada

function limpiarCampo (){
    document.querySelector("#amigo").value = "";
    
}

//Función actualizar lista

function actualizarLista(){
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML="";
    
    // recorre la lista y agrega cada nombre como un elemento li

    for(let i =0; i< listaAmigo.length; i++){
        let item = document.createElement("li");
        item.textContent= listaAmigo[i];
        lista.appendChild(item);
    }
}

// Función sortear amigo secreto

function sortearAmigo(){

    //Estado del juego

    if (sorteoRealizado){
        reiniciarSorteo(); // reinicia el juego si ya se realizo el sorteo
        return;
    }
   
    //Validar que hayan elementos en la lista
    
    if (listaAmigo.length===0){
        alert("No existen amigos para sortear. ¡Digite los nombres!");
        return;
    }

    //Generar índice aleatorio y obtener nombre del amigo
    
    let indiceAleatorio = Math.floor(Math.random()*listaAmigo.length);
    let sorteo = listaAmigo[indiceAleatorio];

    //mostrar el reseltado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML= (`El amigo sorteado es <strong> ${sorteo}</strong>!`);

    //Marcar sorteo realizado y cambiar botón

    sorteoRealizado = true;

    cambiarBoton(); 

}

// Función para reiniciar sorteo

function reiniciarSorteo(){
    listaAmigo=[];
    sorteoRealizado = false;
    cambiarBoton();

    //Eliminar el nombre del ganador y lista de nombres
   
    let limpiarResultado = document.getElementById("resultado");
    limpiarResultado.innerHTML = "";

    document.getElementById("listaAmigos").innerHTML="";
        
}

// Función para cambiar botón de sorteo/reiniciar

function cambiarBoton(){
    let boton = document.getElementById("botonSortear");
    let icono = document.getElementById("iconoSorteo");

    if(sorteoRealizado){
        boton.textContent = "Reiniciar sorteo";
        boton.prepend(icono);
        icono.src = "assets/icono_restart_alt.png";
        icono.alt = "Ícono para reinicar";
    }else{
        boton.textContent = "Sortear amigo";
        boton.prepend(icono);
        icono.src = "assets/play_circle_outline.png";
        icono.alt = "Ícono para sortear";
    }
}

