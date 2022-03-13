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

productos = [{
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
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
    {
        id: 7,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
    {
        id: 6,
        img: "../img/cubiertas/rueda-pirelli.jpg",
        title: "XL SCORPION ATR",
        subtitle: "175/70R14 88H",
        precio: 32.920,

    },
];

function imprimirProductosHtml(productos) {
    const contenedorCubierta = document.getElementById("contenedor-cubiertas")
    for (const contenido of productos) {
        let card = document.createElement("div")
        card.className("col - md - 6 col - lg - 4 col - xl - 4 d - flex align - conten justify - content - sm - around mt - 5 tarjeta")
        card.innerHTML = `<div class="col-10 tarjeta-contenida">
                            <div class="card h-100 w-100">
                                <img id="img-producto" src="${productos.img}"
                                    class="card-img-top  img-fluid" alt="cubierta-pirelli">
                                <div class="card-body bg-body ">
                                    <p id="title-product"
                                        class="card-text text-center d-flex flex-column fw-bold descripcion-productos">
                                        ${productos.title}<span>${productos.subtitle}</span></p>
                                    <div
                                        class="buton-icono col-md-2 d-flex align-items-center justify-content-center flex-wrap w-100">
                                        <button id="btn-compra" class="btn btn-outline-primary w-50 d-flex align-items-center
                                            justify-content-center fw-bold ">COMPRAR</button>
                                        <p id="price-producto"
                                            class=" w-50 d-flex align-items-center justify-content-center m-auto fw-bold ">
                                            $ ${productos.precio}</p>
                                        <div class=" d-flex align-items-center w-100 justify-content-lg-end">
                                            <img class=" logo-ahora12 img-fluid w-30 "
                                                src=" ../img/logos/LOGO-AHORA-12.png" alt="logo-ahora-12">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-warning">
                                    <small class="text-black">*Hasta agotar stock</small>
                                </div>
                            </div>
                        </div>`

        contenedorCubierta.appendChild(card)
        let btnCompra = document.getElementById(`agregar${productos.id}`)
        btnCompra.addEventListener('click', agregarAlCarro(productos.id))
    }
}