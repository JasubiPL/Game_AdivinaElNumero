import '../css/pantallaNivelPrincipiante.css';
import arrowIcon from '../img/arrow-left-icon.png';
import robotIcon from '../img/user-icon.png';
import menuPointIcon from '../img/menuPoint-icon.png';
import sendIcon from '../img/send-icon.png';

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
        <input id="inputNivelPrincipiante" type="text" placeholder="Escribe tu respuesta">
        <img src="${sendIcon}" />
    </div>
`;