const btnIngresar = document.getElementById("btn-ingresar")

btnIngresar.addEventListener('click', () => {
    pageUser(inputUserName, inputUserPassword);
    guardoDatos()

});
let inputUserName;
let inputUserPassword;

function pageUser() {
    inputUserName = document.getElementById("input-name-user").value
    console.log(inputUserName);
    inputUserPassword = document.getElementById("input-password-user").value;
    console.log(inputUserPassword)

    if (inputUserName != "admin" && inputUserPassword != "admin") {
        swal("bienvenido", inputUserName, "success");
    } else {
        swal("no tiene permisos para esta operacion", "error");

    }
    guardoDatos();
}

const guardoDatos = () => {
    localStorage.setItem("inputUserName", inputUserName);
    localStorage.setItem("inputUserPassword", inputUserPassword);
}

const recuperarDatos = () => {
    inputUserName = localStorage.getItem("inputUserName");
    inputUserPassword = localStorage.getItem("inputUserPassword");

}

const limpiarLocalStorage = () => {
    const resp = confirm("¿Realmente deseas eliminar los datos del LS?");
    if (resp) {
        localStorage.clear();
        console.log("se han eliminado los datos");
    }
}


recuperarDatos();

