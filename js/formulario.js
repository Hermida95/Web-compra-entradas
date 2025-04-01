function enviarDatos(){

    var nombreyapellidos = document.getElementById("nombreyapellidos") .value;
    var fecha = document.getElementById("fecha") .value;
    var ciudad = document.getElementById("ciudad") .value;
    var entradas = document.getElementById("entradas") .value;
    var categoria = document.getElementById("categoria") .value;
    var pago = document.querySelector('input[name="pago"]:checked').value;
    var terminos = document.getElementById("terminos") .value; 



   



    window.location.href = 
    "confirmacion.html?nombreyapellidos=" + encodeURIComponent (nombreyapellidos) + 
    "&fecha=" + encodeURIComponent (fecha) +
    "&ciudad=" + encodeURIComponent (ciudad) +
    "&entradas=" + encodeURIComponent (entradas) +
    "&categoria=" + encodeURIComponent (categoria) +
    "&pago=" + encodeURIComponent (pago) +
    "&terminos=" + encodeURIComponent (terminos);

}