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
        Swal.fire(
            `Bienvenido ${inputUserName}`,
            'estamos felices de tenerte de vuelta',
            'success'
        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no tiene permisos de administrador',
            footer: 'intente nuevamente'
        })
        swal("no tiene permisos para esta operacion", "error");

    }
    guardoDatos();
}

const guardoDatos = () => {
    localStorage.setItem("inputUserName", JSON.stringify(inputUserName));
    localStorage.setItem("inputUserPassword", JSON.stringify(inputUserPassword));
}

const recuperarDatos = () => {
    JSON.parse(localStorage.getItem("inputUserName"));
    JSON.parse(localStorage.getItem("inputUserPassword"));

}

const limpiarLocalStorage = () => {
    const resp = confirm("¿Realmente deseas eliminar los datos del LS?");
    if (resp) {
        localStorage.clear();
        console.log("se han eliminado los datos");
    }
}


recuperarDatos();