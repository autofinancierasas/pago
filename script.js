function pagar(){

let referencia = document.getElementById("referencia").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;
let email = document.getElementById("email").value;
let nombre = document.getElementById("nombre").value;
let cedula = document.getElementById("cedula").value;
let celular = document.getElementById("celular").value;

let url = "verificar.html?" +
"referencia=" + encodeURIComponent(referencia) +
"&concepto=" + encodeURIComponent(concepto) +
"&valor=" + encodeURIComponent(valor) +
"&email=" + encodeURIComponent(email) +
"&nombre=" + encodeURIComponent(nombre) +
"&cedula=" + encodeURIComponent(cedula) +
"&celular=" + encodeURIComponent(celular);

window.location.href = url;

}