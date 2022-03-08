//variables para productos.

/* let imgProducto = document.getElementById('img-producto');
let titleProducto = document.getElementById('title-producto')
let priceProducto = document.getElementById('price-producto') */


const btnCompra = document.querySelectorAll('#btn-compra'); //con este propiedad selecciono todos los botones de compra
btnCompra.forEach((añadirAlCarro) => { // uso la variable con un foreach(paso el parametro añadirAlCarro) creo una funcion flecha la cual va a usar en evento el mismo nombre del parametro
    añadirAlCarro.addEventListener('click', añadirAlCarroClick); //creo un evento click y le paso la funcion que se va a llamar añadirAlCarroClick. que luego voy a crear para darle el evento target

})

function añadirAlCarroClick(event) { //creo a funcion añadirAlCarro que es la que le paso al evento click como parametro
    const boton = event.target; //creo una variable que va a ser el boton que se va a clickear, usando el parametro de la funcion y target se refiere elemento clickeado

    console.log(boton)
}