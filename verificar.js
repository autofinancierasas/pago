const params = new URLSearchParams(window.location.search);

document.getElementById("referencia").textContent = params.get("referencia") || "";
document.getElementById("concepto").textContent = params.get("concepto") || "";
document.getElementById("valor").textContent = params.get("valor") || "";
document.getElementById("email").textContent = params.get("email") || "";
document.getElementById("nombre").textContent = params.get("nombre") || "";
document.getElementById("cedula").textContent = params.get("cedula") || "";
document.getElementById("celular").textContent = params.get("celular") || "";

});

function openQR(){

const modal = document.getElementById("qrModal");

modal.style.display = "flex";

}

function closeQR(){

const modal = document.getElementById("qrModal");

modal.style.display = "none";

}
