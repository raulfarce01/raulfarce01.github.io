/**
 *
 * Pa que no se te cuelen los listos con el correo, tú sabe
 *
 */

var correo = /[\w+(\-\_\.\/)]+[@][\w]+\.[\w]+/;

/**
 *
 * Deshabilitamos el botón de registro pa que ningún payaso lo pulse mientras falten credenciales y tal
 *
 */

var submitButton = document.getElementById("submitButton");
var emailInput = document.getElementById("emailInput");

submitButton.disabled = true;

submitButton.style.backgroundColor = "grey";
submitButton.style.color = "black";

/**
 *
 * Recoge los datos del input de correo cada vez que se pulsa una tecla, para poder comprobarlo a tiempo real
 *
 */
emailInput.addEventListener("keyup", function () {
    var emailValue = document.getElementById("emailInput").value;

    if (!emailValue.match(correo)) {
        emailInput.style.border = "1px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "grey";
        submitButton.style.color = "black";
    } else {
        emailInput.style.border = "1px solid black";
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "#0A1940";
        submitButton.style.color = "white";
    }
});