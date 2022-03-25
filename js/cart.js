const productos = [{
    id: "cubierta1",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/65R14 82T",
    price: 25680,
    producto: true,
    cantidad: 1
  },
  {
    id: "cubierta2",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "FORMULA ENERGY",
    subTitle: "175/65R14 82T",
    price: 13890,
    producto: true,
    cantidad: 1
  },
  {
    id: "cubierta3",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "P400 EVO",
    subTitle: "175/65R14 82T",
    price: 18560,
    producto: true,
    cantidad: 1
  },
  {
    id: "cubierta4",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CHRONO",
    subTitle: "175/65R14 90T",
    price: 19530,
    producto: true,
    cantidad: 1
  },
  {
    id: "cubierta5",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/70R14 84T",
    price: 24570,
    producto: true,
    cantidad: 1
  },
  {
    id: "cubierta6",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "XL SCORPION ATR",
    subTitle: "175/70R14 88H",
    price: 32920,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador1",
    img: "../img/amortiguadores/amortiguador-1.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "CHEVROLET CORSA",
    price: 18560,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador2",
    img: "../img/amortiguadores/amortiguador-2.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "FIAT SIENA, PALIO",
    price: 15650,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador3",
    img: "../img/amortiguadores/amortiguador-3.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "FORD FIESTA",
    price: 20210,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador4",
    img: "../img/amortiguadores/amortiguador-4.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "RENAULT CLIO",
    price: 19860,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador5",
    img: "../img/amortiguadores/amortiguador-5.jpeg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "VOLSKWAGEN GOL",
    price: 19520,
    producto: true,
    cantidad: 1
  },
  {
    id: "amortiguador6",
    img: "../img/amortiguadores/amortiguador-6.jpeg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "PEUGEOT PARTNER",
    price: 20185,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno1",
    img: "../img/frenos/freno-1.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "CHEVROLET AGILE, CELTA Y PRISMA, FRASLE",
    price: 22680,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno2",
    img: "../img/frenos/freno-2.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FIAT ADVENTURE Y PALIO, FRASLE",
    price: 19890,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno3",
    img: "../img/frenos/freno-3.jpg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "VOLSKWAGEN BORA, FOX Y POLO, FRASLE",
    price: 22350,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno4",
    img: "../img/frenos/freno-4.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FORD ECO SPORT, FRASLE",
    price: 23190,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno5",
    img: "../img/frenos/freno-5.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FIAT TORO Y CHRONO, FRASLE",
    price: 21250,
    producto: true,
    cantidad: 1
  },
  {
    id: "freno6",
    img: "../img/frenos/freno-6.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "CHEVROLET SONIC, CRUZE, FRASLE",
    price: 23850,
    producto: true,
    cantidad: 1
  },
  {
    id: "oferta1",
    img: "../img/ofertas/oferta-1.jpeg",
    title: "SERVICE FOCUS 2.0 o 1.6",
    subTitle: "CAMBIO DE ACEITE 5W30 Y FILTROS",
    price: 8.550,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta2",
    img: "../img/ofertas/oferta-2.jpg",
    title: "SERVICE AMAROK 2.0",
    subTitle: "CAMBIO DE ACEITE 5W40 Y FILTROS",
    price: 7560,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta3",
    img: "../img/ofertas/oferta-3.jpeg",
    title: "SERVICE ONIX 1.6",
    subTitle: "CAMBIO DE ACEITE 5W30 Y FILTROS",
    price: 8.550,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta4",
    img: "../img/ofertas/oferta-4.jpeg",
    title: " CAMBIO DE AMORTIGUADORES TRASEROS",
    subTitle: "FIAT PALIO, SIENA",
    price: 9580,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta5",
    img: "../img/ofertas/oferta-5.jpg",
    title: " CAMBIO DE AMORTIGUADORES TRASEROS",
    subTitle: "CHEVROLET CORSA",
    price: 11350,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta6",
    img: "../img/ofertas/oferta-6.jpg",
    title: "CAMBIO DE AMORTIGUADORES DELANTEROS",
    subTitle: "RENAULT CLIO",
    price: 9280,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta7",
    img: "../img/ofertas/oferta-7.jpg",
    title: "BATERIA BOSCH S4",
    subTitle: "PARA VEHICULOS PARTICULARES",
    price: 16200,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta8",
    img: "../img/ofertas/oferta-8.jpg",
    title: "BATERIA MATEO 12X55",
    subTitle: "EXCLUSIVO PARA TAXIS, REMISES",
    price: 11520,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta9",
    img: "../img/ofertas/oferta-9.jpg",
    title: "BATERIA MOURA 12X40",
    subTitle: "PARA CAMIONETAS 4X4 Y CAMIONES",
    price: 23580,
    producto: false,
    cantidad: 1
  },
]
let productosAgregados = [];

function mostrarProductos() {
  const card = document.getElementById('card');
  for (const productosCard of productos) {

    const contentCard = document.createElement('div');
    contentCard.setAttribute('class', 'tarjeta-contenido')
    if (productosCard.producto) {
      //si esta de oferta
      contentCard.innerHTML = ` 
                <div class="imagen"><img id="img-producto" src="${productosCard.img}" alt=""></div>
                <h2 class="title-producto">${productosCard.title}<span>${productosCard.subTitle}</span></h2>
                <div class="seccion2">
                    <p class="precio-producto"> $ ${productosCard.price}</p>
                    <button  id="${productosCard.id}">Agregar</button>
                </div>
                
                <div class="linea">
                <hr>

                </div>
                `;


    } else {
      //sino esta de oferta

      contentCard.innerHTML = ` 
                <div class="imagen"><img id="img-producto" src="${productosCard.img}" alt=""></div>
                <h2 class="title-producto">${productosCard.title}<span>${productosCard.subTitle}</span></h2>
                <div class="seccion2">
                    <p class="precio-producto"> $ ${productosCard.price}</p>
                    <button id="${productosCard.id}">Agregar</button>
                </div>
                
                <div class="linea">
                <hr>

                </div>
                `;
    }



    card.appendChild(contentCard);
    let btnCompra = document.getElementById(`${productosCard.id}`);
    btnCompra.onclick = () => {
      productosAgregados.push(productosCard);
      agregarAlCarro();

    };

  }
}

function agregarAlCarro() {
  const contenedorCarro = document.getElementById('contenedorCarro');
  contenedorCarro.innerHTML = '';

  for (const carro of productosAgregados) {
    let añadiendoAlCarro = document.createElement('div');
    añadiendoAlCarro.setAttribute('class', 'carro-compras') //creo un div nuevo en el html que va a ser el contenedor del carro
    añadiendoAlCarro.innerHTML =
      `       <div class="producto-carro">
                  <div class="imagen-carro">
                    <div div class="imagen-cart">
                      <img src=${carro.img} alt = "" >
                    </div> 
                     <div class="title-producto-carro">
                      <h2>${carro.title}<span>${carro.subTitle}</span></h2>
                    </div> 
                  </div> 
              </div> 
              <div class="precio-carro">
                  <div class="price-carro">
                      <p>$ ${carro.price}</p> 
                 </div> 
              </div> 
              <div class="cantidad-carro">
                    <div class="button-cantidad">
                      <div class="btn-number">
                         <input id="btnSuma" type="number"value="${carro.cantidad}">
                      </div>
                      <div class="btn-delete">
                        <button id="btn-delete"><img src="../img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;

    contenedorCarro.appendChild(añadiendoAlCarro);
    const btnDelete = document.getElementById('btn-delete');
    btnDelete.onclick = () => {
      contenedorCarro.removeChild(añadiendoAlCarro);
      productosAgregados.splice(productosAgregados.indexOf(carro), 1);
      sumaProductos();

      agregarAlCarro();
    }

    sumaProductos()

  }
}
mostrarProductos()
let suma;
const compra = document.getElementById('compra');
const total = document.createElement('span');
total.setAttribute('class', 'total');

function sumaProductos() {
  suma = 0;
  /*   let totales = productosAgregados.reduce((acumulador, item) => acumulador + item.price, 0) */
  for (const iterator of productosAgregados) {
    suma += iterator.price;
    sumaProductosAgregadosCarro()

  }
  total.innerHTML = "";
  compra.innerHTML = "";
  total.innerHTML = `Total $ ${suma}`;
  compra.appendChild(total);

};


let sumaProductosAgregados;
let cantidad = 1;

function sumaProductosAgregadosCarro() {
  const btnSumaProducto = document.getElementById('btnSuma');
  btnSumaProducto.onclick = () => {
    cantidad++;
    btnSumaProducto.value = cantidad;
    sumaProductosAgregados = suma * cantidad;
    total.innerHTML = "";
    compra.innerHTML = "";
    total.innerHTML = `Total $ ${sumaProductosAgregados}`;
    compra.appendChild(total);
    console.log(sumaProductosAgregados);

  }

}



let botonCompraFinalizada = document.getElementById('comprar');
botonCompraFinalizada.addEventListener('click', () => {
  alert("Compra finalizada");
  productosAgregados = [];
  agregarAlCarro();
  sumaProductos();
  sumaProductosAgregadosCarro();
  suma = 0;
  sumaProductosAgregados = 0;

});