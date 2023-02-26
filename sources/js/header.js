
var header = document.createElement("header");
header.className = "header-general";
header.innerHTML =
  '<nav class="header">' +
  '<img src="/sources/img/logo.png" id="logo" />' +
  '<div id="linea"></div>' +
  '<ul class="menu">' +
  '<li><a href="/index.html">Inicio</a></li>' +
  '<li>' +
  '<a href="">Matrículas</a>' +
  '<ul class="submenu">' +
  '<li><a href="/sources/forms/formPrescolar.html">Preescolar</a></li>' +
  '<li><a href="/sources/forms/formPrimaria.html">Primaria</a></li>' +
  '<li><a href="/sources/forms/formSecundaria.html">Secundaria</a></li>' +
  '</ul>' +
  '</li>' +
  '<li><a href="/notas.html">Notas</a></li>' +
  '<li><a href="/docentes.html">Docentes</a></li>' +
  '<li><a href="/myv.html">Misión y Visión</a></li>' +
  '<li><a href="/pqrs.html">PQRS</a></li>' +
  '<li>' +
  '<a href="">functions</a>' +
  '<ul class="submenu">' +
  '<li><a href="sources/function/imc.html">IMC</a></li>' +
  '</ul>' +
  '</li>' +
 '<div id="reloj"></div>'+
  '</nav>'
document.body.appendChild(header);