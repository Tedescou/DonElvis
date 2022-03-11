/*Formulario de reserva don elvis*/
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5491132687304';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let dia = document.querySelector('#dia').value
        let hora = document.querySelector('#hora').value
        let cantidad = document.querySelector('#cantidad').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Don Elvis*%0A*Nombre*%0A' + nombre + '%0A*Dia de la reserva*%0A' + dia + '%0A*horario de reserva*%0A' + hora +'%0A*cantidad de personas*%0A' + cantidad +  ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = 'Enviar reserva'
        buttonSubmit.disabled = false
    }, 3000);
}); 
/*Menú*/
function drinks (){
    let listadoDrinks = document.getElementById("listadoDrinks")
    let drinks = document.getElementById("drinks")
    if (listadoDrinks.style.display === "none") {
        listadoDrinks.style.display = "block";
        drinks.innerHTML="CERRAR"
    } else {
        listadoDrinks.style.display = "none";
        drinks.innerHTML="Quiero!"
    }
}
function entrada(){
    let listadoEntrada = document.getElementById("listadoEntrada")
    let entrada = document.getElementById("entrada")
    if (listadoEntrada.style.display === "none") {
        listadoEntrada.style.display = "block";
        entrada.innerHTML ="CERRAR"
    } else {
        listadoEntrada.style.display = "none";
        entrada.innerHTML = "Quiero!"
    }
}
function principal(){
    let listadoPrincipal = document.getElementById("listadoPrincipal")
    let principal= document.getElementById("principal")
    if (listadoPrincipal.style.display === "none") {
        listadoPrincipal.style.display = "block";
        principal.innerHTML = "CERRAR"
    } else {
        listadoPrincipal.style.display = "none";
        principal.innerHTML = "Quiero!"
    }
}
function postre(){
        let listadoPostre = document.getElementById("listadoPostre")
        let postre = document.getElementById("postre")
        if (listadoPostre.style.display === "none") {
            listadoPostre.style.display = "block";
            postre.innerHTML = "CERRAR"
        } else {
            listadoPostre.style.display = "none";
            postre.innerHTML = "Quiero!"
        }
    }

