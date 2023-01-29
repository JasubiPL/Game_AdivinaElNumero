import '../css/pantallaNivelPrincipiante.css';
import '../css/mensajes.css';
import arrowIcon from '../img/arrow-left-icon.png';
import robotIcon from '../img/user-icon.png';
import menuPointIcon from '../img/menuPoint-icon.png';
import sendIcon from '../img/send-icon.png';
import { compararNumeros } from '../componentes/logicaDeJuego';

const pantallaNivelPrincipiante = document.getElementById("pantallaNivelPrincipiante");

pantallaNivelPrincipiante.innerHTML =`
    <div class="headerNivelPrincipiante">
        <img src="${arrowIcon}" />
        <img id="bot" src="${robotIcon}" />
        <p>Piñeyro-bot</p>
        <img src="${menuPointIcon}" />
    </div>
    <div id="contenedorMensajesNivelPrincipiante">
    </div>
    <div class="footerNivelPrincipiante">
        <input id="inputNivelPrincipiante" type="number" placeholder="Escribe tu respuesta">
        <img id="btnSend" src="${sendIcon}" />
    </div>

`;

/*----Funcionalidad----*/

let valorInsertado = document.getElementById("inputNivelPrincipiante");
const btnSend = document.getElementById("btnSend").addEventListener("click", pressSend);


function pressSend(){
    compararNumeros(valorInsertado.value);
    valorInsertado.value = "";
    
}