const btnIngresar = document.getElementById("btn-ingresar")

btnIngresar.addEventListener('click', () => {
    pageUser(inputUserName, inputUserPassword);

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
}