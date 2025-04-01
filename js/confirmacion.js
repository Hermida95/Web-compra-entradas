window.onload= function() {
    var params= new URLSearchParams (window.location.search);
    var nombreyapellidos= params.get ("nombreyapellidos");
    var fecha= params.get ("fecha");
    var ciudad= params.get ("ciudad");
    var entradas= params.get ("entradas");
    var categoria= params.get ("categoria");
    var pago= params.get ("pago");
    var terminos= params.get ("terminos");


    document.getElementById("resultado").innerHTML =

    `<p>Hola, <b>${nombreyapellidos}</b> has comprado tus entradas para el concierto de los Arctic Monkeys
    el día <b>${fecha}</b>, en <b>${ciudad}</b>.Has comprado <b>${entradas}</b> entrada/s y disfrutarás 
    el concierto en <b>${categoria}</b>. El pago lo has realizado con <b>${pago}</b>. <br />
    Terminos aceptados: ${terminos}. <br />
     Muchas gracias por tu confianza!</p>`
    

}