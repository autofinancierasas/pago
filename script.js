document.getElementById("formPago").addEventListener("submit", function(e){
    e.preventDefault();

    const referencia = document.getElementById("referencia").value;
    const concepto = document.getElementById("concepto").value;
    const valor = document.getElementById("valor").value;
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const celular = document.getElementById("celular").value;

    const params = new URLSearchParams({
        referencia, concepto, valor, email, nombre, cedula, celular
    });

    window.location.href = "verificar.html?" + params.toString();
});
