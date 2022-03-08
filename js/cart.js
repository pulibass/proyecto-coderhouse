//variables para productos.

let imgProducto = document.getElementById('img-producto');
let titleProducto = document.getElementById('title-producto');
let priceProducto = document.getElementById('price-producto');


const btnCompra = document.querySelectorAll('#btn-compra'); //con este propiedad selecciono todos los botones de compra
btnCompra.forEach((añadirAlCarro) => { // uso la variable con un foreach(paso el parametro añadirAlCarro) creo una funcion flecha la cual va a usar en evento el mismo nombre del parametro
    añadirAlCarro.addEventListener('click', añadirAlCarroClick); //creo un evento click y le paso la funcion que se va a llamar añadirAlCarroClick. que luego voy a crear para darle el evento target

})

function añadirAlCarroClick(event) { //creo a funcion añadirAlCarro que es la que le paso al evento click como parametro
    const boton = event.target; //creo una variable que va a ser el boton que se va a clickear, usando el parametro de la funcion y target se refiere elemento clickeado
    console.log(boton)
}

let producto;

function Producto(nombre, dato, precio, iva, descuento) {
    this.nombre = nombre.toUpperCase();
    this.dato = dato.toUpperCase();
    this.precio = parseInt(precio);
    this.iva = parseInt(iva);
    this.descuento = parseInt(descuento);
    this.calculo = function () {

        let iva = (this.precio * this.iva) / 100;
        let precioConIva = this.precio + iva;
        let descuento = (precioConIva * this.descuento) / 100;
        let precioTotal = precioConIva - descuento;
        let detalle = document.write("<br>" + "producto seleccionado: " + "<br>" + "<b>" + this.nombre + " " + dato + "<br>" + "</b>" + " Precio: $" + "<b>" + this.precio + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioConIva + "<br>" + "</b>" + "El precio total con el descuento del " + this.descuento + "% es: $" + "<b>" + precioTotal + "</b>" + "<br>");
        return detalle;
        /*  let contenedorProducto = document.getElementsByClassName('contenedor-productos');
         let nuevoProducto = document.createElement('div');
         nuevoProducto.classList.add('carro-compras');
         const contenidorAñadido = `
                     <div class="producto">
                         <div class="imagen-carro">
                             <div class="imagen">
                                 <img src="../img/amortiguadores/amortiguador-4.jpg">
                             </div>
                             <div class="title-producto">
                                 <h2>${nombre}</h2>
                             </div>
                         </div>
                     </div>
                     <div class="precio">
                         <div class="price">
                             <p>${precioTotal}</p>
                         </div>
                     </div>
                     <div class="cantidad">
                         <div class="button-cantidad">
                             <div class="btn-number">
                                 <input type="number" value="number">
                             </div>
                             <div class="btn-delete">
                                 <button><img src="../img/iconos/rectangle-xmark-solid.svg" alt=""></button>
                             </div>
                         </div>
                     </div>`;

         nuevoProducto.innerHTML = contenidorAñadido;

         contenedorProducto.append(nuevoProducto); */

    }
}
let productos = []

while (producto != "cubierta" || producto != "amortiguador" || producto != "bateria") {

    producto = prompt("ingrese un producto: cubierta, amortiguador, bateria");
    switch (producto) {
        case "cubierta":
            productos.push(new Producto(producto, " Pirelli 185 65 14", 20000, 21, 30));
            break;
        case "amortiguador":
            productos.push(new Producto(producto, "corven x 4", 15000, 21, 15));

            break;
        case "bateria":
            productos.push(new Producto(producto, "moura", 12050, 21, 10));

            break;
        default:
            alert("no se ingreso un producto valido");
            break;
    }


    ingreseNuevamente = prompt("desea ingresar un producto nuevamente? si o no,")
    if (ingreseNuevamente == "no") {
        alert("gracias por utilizar nuestros servicios")
        break;
    }
}
for (const productosInclude of productos) {
    productosInclude.calculo()

}
console.table(productos);