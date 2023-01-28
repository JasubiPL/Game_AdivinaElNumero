import '../css/pantallaDeInicio.css';
import logoJuego from '../img/logo-juego.png';
import jugaricon from '../img/play-verde-icon.png';
import googlePlayIcon from '../img/googleplay-azul-icon.png';
import facebookIcon from '../img/facebook-icon.png';
import githubIcon from '../img/github-icon.png';
import twitterIcon from '../img/twitter-icon.png';
import linkedinIcon from '../img/linkedin-icon.png';

const pantallaDeInicio = document.getElementById("pantallaDeInicio");


pantallaDeInicio.innerHTML = `
    <div class="contenedorPantallaDeInicio">
        <img class="logoJuego" src="${logoJuego}" />

        <div class="contenedorBtnPantallaDeInicio">
            <button id="btnJugar">
                <img src="${jugaricon}" />
                <p>Jugar</p>
            </button>
            <button id="btnMasApps">
                <img src="${googlePlayIcon}" />
                <p>Mas Apps</p>
            </button>
        </div>

        <div class="follow">
            <p>Sigueme como @jasubip</p>
            <div class="contenedorFollowIcon">
                <img src="${facebookIcon}" />
                <img src="${githubIcon}" />
                <img src="${twitterIcon}" />
                <img src="${linkedinIcon}" />
            </div>
        </div>
    </div>
`;
const btnJugar = document.getElementById("btnJugar").addEventListener("click", pressJugar);
const btnMasApps = document.getElementById("btnMasApps").addEventListener("click", pressMasApps);

function pressJugar(){
    alert("play");
}

function pressMasApps(){
    alert("Esta funcion no esta disponible por el momento")
}

