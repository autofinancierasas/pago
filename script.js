document.getElementById("formPago").addEventListener("submit", function(e){

e.preventDefault();

const referencia = document.getElementById("referencia").value;
const concepto = document.getElementById("concepto").value;
const valor = document.getElementById("valor").value;
const email = document.getElementById("email").value;
const nombre = document.getElementById("nombre").value;
const cedula = document.getElementById("cedula").value;
const celular = document.getElementById("celular").value;

const url = `verificar.html?referencia=${encodeURIComponent(referencia)}
&concepto=${encodeURIComponent(concepto)}
&valor=${encodeURIComponent(valor)}
&email=${encodeURIComponent(email)}
&nombre=${encodeURIComponent(nombre)}
&cedula=${encodeURIComponent(cedula)}
&celular=${encodeURIComponent(celular)}`;

window.location.href = url;

});
