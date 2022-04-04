const load = document.getElementById('load');
const reset = document.getElementById('reset')
console.log(load);

function cargar(evt) {
    evt.preventDefault();
    load.style.display = "block";
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;
    const producto = document.getElementById('producto').value;
    console.log(nombre + apellido + telefono + email + ciudad + producto)

    let templateParams = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        ciudad: ciudad,
        producto: producto,
    };
    console.log(templateParams.ciudad)


    emailjs.send('service_lz0df4j', 'template_89vdnoc', templateParams)
        .then(function (response) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El email se envio correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            load.style.display = "none";
            reset.click();
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo enviar el email',
                footer: 'intente nuevamente'
            })
            load.style.display = "none";
            reset.click();
        });
}

