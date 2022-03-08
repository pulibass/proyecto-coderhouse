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