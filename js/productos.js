class Productos {
    constructor(producto, cantidad) {
        this.id = producto.id;
        this.title = producto.title;
        this.subtitle = producto.subtitle;
        this.precio = producto.precio;
        this.cantidad = cantidad;
        this.precioTotal = producto.precio
    }
    agregarUnidad() {
        this.cantidad++
    }
    quitarUnidad() {
        this.cantidad--
    }
    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

producto = [{
        id: 1,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "CINTURATO P1",
        subtitle: "175/65R14 82T",
        precio: 25.680,

    },
    {
        id: 2,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: " FORMULA ENERGY",
        subtitle: "175/65R14 82T",
        precio: 13.890,

    },
    {
        id: 3,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "P400 EVO ",
        subtitle: "175/65R14 82T",
        precio: 18.560,

    },
    {
        id: 4,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "CHRONO",
        subtitle: "175/65R14 90T",
        precio: 19.530,

    },
    {
        id: 5,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "CINTURATO P1",
        subtitle: "175/70R14 84T",
        precio: 24.570,

    },
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },



];
let contenedorCubierta = document.getElementById("contenedor-cubierta")

function imprimirProductosHtml() {
    for (const contenido of producto) {
        let card = document.createElement("div")
        card.innerHTML = `<div class="card">
                            <img src="${contenido.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center d-flex flex-column fw-bold">
                                    ${contenido.title}<span>${contenido.subtitle}</span></h5>
                                <div id="agregar${contenido.ids}"
                                    class="buton-icono col-md-2 d-flex align-items-center justify-content-center flex-wrap w-100">
                                    <button id="btn-compra" class="btn btn-outline-primary w-50 d-flex align-items-center
                                            justify-content-center fw-bold ">COMPRAR</button>
                                    <p id="price-producto"
                                        class=" w-50 d-flex align-items-center justify-content-center m-auto fw-bold ">
                                        $ ${contenido.precio}</p>
                                    <div class=" d-flex align-items-center w-100 justify-content-end">
                                        <img class=" logo-ahora12 img-fluid w-25 " src=" ../img/logos/LOGO-AHORA-12.png"
                                            alt="logo-ahora-12">
                                    </div>
                                </div>
                            </div>
                        < /div>

                        `

        contenedorCubierta.appendChild(card)
        let btnCompra = document.getElementById(`agregar${contenido.id}`)
        btnCompra.addEventListener('click', agregarAlCarro(contenido.id))
    }
}
imprimirProductosHtml()