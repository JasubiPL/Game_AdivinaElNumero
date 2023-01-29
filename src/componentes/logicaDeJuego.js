let numeroAleatorio = 0;


export function inciarJuego(){
    console.log("inicia Juego");
    setTimeout(mensajeDeBienvenida, 2000);

    numeroAleatorio = Math.round(Math.random() * 10);
    console.log(numeroAleatorio);
}

export function compararNumeros(valorInsertado){
    crearMensajeUsuario(valorInsertado);
    const contenedorMensajesNivelPrincipiante = document.getElementById("contenedorMensajesNivelPrincipiante");

    console.log(valorInsertado);

    valorInsertado = parseInt(valorInsertado)

    if(numeroAleatorio === valorInsertado){
        console.log("correcto")

        setTimeout(() =>{
            let printMensajeBot = document.createElement("p");
            printMensajeBot.classList= "printMensajeBot";
            printMensajeBot.innerText = "Es Corecto";
            contenedorMensajesNivelPrincipiante.insertAdjacentElement("afterbegin",printMensajeBot);
        },1000);
     }
     else if(numeroAleatorio > valorInsertado){
        setTimeout(() =>{
            let printMensajeBot = document.createElement("p");
            printMensajeBot.classList= "printMensajeBot";
            printMensajeBot.innerText = "Intenta un numero mas alto";
            contenedorMensajesNivelPrincipiante.insertAdjacentElement("afterbegin",printMensajeBot);
        },1000);
    }else{
        setTimeout(() =>{
            let printMensajeBot = document.createElement("p");
            printMensajeBot.classList= "printMensajeBot";
            printMensajeBot.innerText = "Intenta un numero mas bajo";
            contenedorMensajesNivelPrincipiante.insertAdjacentElement("afterbegin",printMensajeBot);
        },1000);
    }
    
}

function crearMensajeUsuario(valorInsertado){
    const contenedorMensajesNivelPrincipiante = document.getElementById("contenedorMensajesNivelPrincipiante");
    let printMensajeUsuario = document.createElement("p")
    printMensajeUsuario.classList = "printMensajeUsuario";
    printMensajeUsuario.innerText = valorInsertado;
    contenedorMensajesNivelPrincipiante.insertAdjacentElement("afterbegin", printMensajeUsuario);
}

function mensajeDeBienvenida(){
    const contenedorMensajesNivelPrincipiante = document.getElementById("contenedorMensajesNivelPrincipiante");

    let printMensajeBot = document.createElement("p");
        printMensajeBot.classList= "printMensajeBot";
        printMensajeBot.innerText = `¡Hola!
        Veo que te animaste a jugar, empecemos con algo fácil.
        Estoy pensando un número del 1 al 10 ¿Cuál es?`;
        contenedorMensajesNivelPrincipiante.insertAdjacentElement("afterbegin",printMensajeBot);
}