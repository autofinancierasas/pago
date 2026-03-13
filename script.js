document.getElementById("formPago").addEventListener("submit", function(e){

e.preventDefault();

const referencia = document.getElementById("referencia").value;
const concepto = document.getElementById("concepto").value;
const valor = document.getElementById("valor").value;
const email = document.getElementById("email").value;
const nombre = document.getElementById("nombre").value;
const cedula = document.getElementById("cedula").value;
const celular = document.getElementById("celular").value;

const params = new URLSearchParams();

params.append("referencia", referencia);
params.append("concepto", concepto);
params.append("valor", valor);
params.append("email", email);
params.append("nombre", nombre);
params.append("cedula", cedula);
params.append("celular", celular);

window.location.href = "verificar.html?" + params.toString();

});
