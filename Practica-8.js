//Arrays-arreglos; (los arrays tiene x cantidad de elementos dentro).Objetos tipo lista que se proporciona metodos para efectuar operaciones de recorrido y mutacion.
//[] = estructurado y su tipo es arrays-arreglo en javascripts
//indice-posicion; para acceder a un elemento en particular. La posicion de un elemento siempre comienza con la posicion cero
//la ultima posicion de un elemento sera igual a lenght menos 1
//Recursividad; una funcion que ya hayas creados volverla a llamar


let numeroSecreto = 0; //(la variable numero secreo esta fuera y dentro de la funcion (alcance o ambito de la variable)
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);  
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return; //buena practica aqui no retorna nada
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //incluimos parseInt para volver un string en un numero
    //let numeroDeUsuario = document.querySelector('input'); //otra manera de hacerlo es usar la funcion (getElementById)
   
    
    if(numeroDeUsuario === numeroSecreto) {
        //"p"=parrafo, ya no tengo que usar un alert
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos=== 1)?'vez' : 'veces'}`); //(? : ) esta ultima parte del codigo los signos (? y :) significan (?=if) y (:=else)
        document.getElementById('reiniciar').removeAttribute('disabled'); //aqui habilitamos el boton nuevo juego luego de que acertemos el numero secreto
        //arriba hay que tener PENDIENTE que (disabled)esta entre comillas
    } else{
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto)  {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {asignarTextoElemento("p","El numero secreto es mayor");}
        intentos++;
        limpiarCaja(); //la funcion la llamamos cuando la persona no acierta el numero y limpiamos la caja

    }
    
    return;//buena practica aqui no retorna nada
}
/*
function limpiarCaja(){ //con esta funcion estamos limpiando el cuadro y ya no tenemos que hacerlo de manera manual
    let valorCaja = document.querySelector('#valorUsuario')   //aqui obtenemos el elemento con "document." mas sus dos opciones 1-queryselector y 2-getelementebyid
   //tambien colocamos el quereSelector con un id y solo tenemos que agregar el simbolo #
    valorCaja.value = ''; //con esto limpiamos la caja
*/
//OTRA FORMA de hacerlo

    function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //aqui quitamos el return y lo colocamos en un numero
    //aqui tenemos que introducir un if. Al numero generado tenemos que preguntarle si esta en la lista (array)
    //si el numero generado esta incluido en la lista, hacemos una operacion sino hacemos otra
    console.log(numeroGenerado);//para mostrar el numero generado
    console.log(listaNumerosSorteados);//para mostrar el array
    //si ya solteamos todos los numeros podemos mostrar un mensaje en la pantalla y cerrar el juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else{

            if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();// aqui usamos la RECURSIVIDAD de la funcion GenerarNumeroSecreto
            } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
   //limpiar la caja
   limpiarCaja();
    //indicar mensaje de intervalos de numeros 
    //generar el numero aleatorio 
    //inicializar el numero de intentos
   condicionesIniciales();
  
   //deshabilitar el boton de nuevo juego 
   document.querySelector('#reiniciar').setAttribute('disabled','true');
   //aqui desabilitamos el boton "nuevo juego" al momento de reiniciar el juego, para que no se quede activo todo el tiempo
}

condicionesIniciales();


