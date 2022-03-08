/* const btnIngresar = document.getElementById("btn-ingresar")
btnIngresar.addEventListener('click', pageUser)
let inputUserName = document.getElementById("input-name-user");
console.log(inputUserName);
let inputUserPassword = document.getElementById("input-password-user");
console.log(inputUserPassword)

function pageUser() {
    let usuario = [];
    usuario.push(inputUserName)
    let password = [];
    password.push(inputUserPassword)

    if (usuario != "admin" && password != "admin") {
        alert("bienvenido " + inputUserName)
    } else {
        alert("usuario incorrecto")

    }
} */

const btnIngresar = document.getElementById("btn-ingresar")

btnIngresar.addEventListener('click', pageUser)



function pageUser() {

    let inputUserName = document.getElementById("input-name-user").value
    console.log(inputUserName);
    let inputUserPassword = document.getElementById("input-password-user").value;
    console.log(inputUserPassword)

    if (inputUserName != "admin" && inputUserPassword != "admin") {
        swal("bienvenido", inputUserName, "success");
    } else {
        swal("no tiene permisos para esta operacion", "error");

    }
}