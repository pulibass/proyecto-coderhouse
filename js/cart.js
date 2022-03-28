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
    price: 8700,
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
    price: 8550,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta4",
    img: "../img/ofertas/oferta-4.jpeg",
    title: "AMORTIGUADORES TRASEROS",
    subTitle: "FIAT PALIO, SIENA",
    price: 9580,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta5",
    img: "../img/ofertas/oferta-5.jpg",
    title: "AMORTIGUADORES TRASEROS",
    subTitle: "CHEVROLET CORSA",
    price: 11350,
    producto: false,
    cantidad: 1
  },
  {
    id: "oferta6",
    img: "../img/ofertas/oferta-6.jpg",
    title: "AMORTIGUADORES TRASEROS",
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

function cambioProductos() {
  let selectElement = document.querySelector('#selectProducts').value;
  const card = document.getElementById('card');
  card.innerHTML = '';
  if (selectElement === 'oferta') {
    mostrarProductosOferta()

  } else {
    mostrarProductos()

  }
}

function mostrarProductosOferta() {
  const card = document.getElementById('card');
  for (const productosCard of productos) {
    if (!productosCard.producto) {
      const contentCard = document.createElement('div');
      contentCard.setAttribute('class', 'tarjeta-contenido');
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


      card.appendChild(contentCard);
      let btnCompra = document.getElementById(`${productosCard.id}`);
      btnCompra.onclick = () => {
        console.log(productosCard);
        productosAgregados.push(productosCard);
        window.localStorage.setItem("array", JSON.stringify(productosAgregados));

        productosAgregados = JSON.parse(window.localStorage.getItem("array"));
        console.log(productosCard);
        Swal.fire({
          title: 'Producto Agregado al Carrito',
          text: `${productosCard.title}: $${productosCard.price}`,
          imageUrl: `${productosCard.img}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      };
    }
  }
}

function mostrarProductos() {
  const card = document.getElementById('card');
  for (const productosCard of productos) {
    if (productosCard.producto) {
      const contentCard = document.createElement('div');
      contentCard.setAttribute('class', 'tarjeta-contenido');
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
      card.appendChild(contentCard);
      let btnCompra = document.getElementById(`${productosCard.id}`);
      btnCompra.onclick = () => {
        console.log(productosCard);
        productosAgregados.push(productosCard);
        window.localStorage.setItem("array", JSON.stringify(productosAgregados));

        productosAgregados = JSON.parse(window.localStorage.getItem("array"));
        console.log(productosCard);
        Swal.fire({
          title: 'Producto Agregado al Carrito',
          text: `${productosCard.title}: $${productosCard.price}`,
          imageUrl: `${productosCard.img}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      };
    }
  }
}

function mostrarCarrito() {
  const contenedorCarro = document.getElementById('contenedorCarro');
  contenedorCarro.innerHTML = '';
  productosAgregados = JSON.parse(window.localStorage.getItem("array"));

  if (productosAgregados.hasOwnProperty(productos.id)) {
    productos.cantidad = productosAgregados[productos.id].cantidad + 1;
  }

  for (const carro of productosAgregados) {
    añadiendoAlCarro = document.createElement('div');

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
                      <input type="number" value="${carro.cantidad}" min="1" max="10" id="btn">
                      </div>
                      <div class="btn-delete">
                        <button id="btn-delete"><img src="../img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;
    contenedorCarro.appendChild(añadiendoAlCarro);
    console.log(carro);
    console.log(contenedorCarro);

    let btnDelete = document.getElementById('btn-delete');
    btnDelete.onclick = () => {

      for (let i = 0; i < productosAgregados.length; i++) {
        if (productosAgregados[i].id == carro.id) {
          productosAgregados.splice(i, 1);
          window.localStorage.setItem("array", JSON.stringify(productosAgregados));
          mostrarCarrito();
        }
      }
      sumaProductos();
    }

  }

  sumaProductos();
}



window.onload = (e) => {
  if (e.target.baseURI.includes("oferta")) {
    mostrarProductosOferta();
    tituloOfertas();


  } else if (e.target.baseURI.includes("productos")) {
    mostrarProductos();
    tituloProductos();


  } else if (e.target.baseURI.includes("cart")) {
    mostrarCarrito();
  } else {
    alert("No se reconoce esa Url")
  }
}

function sumaProductos(suma) {
  suma = 0;
  const compra = document.getElementById('compra');
  const total = document.createElement('span');
  total.setAttribute('class', 'total');
  /*   let totales = productosAgregados.reduce((acumulador, item) => acumulador + item.price, 0) */
  for (const iterator of productosAgregados) {
    suma += iterator.price;
  }
  total.innerHTML = "";
  compra.innerHTML = "";
  total.innerHTML = `Total $ ${suma}`;
  compra.appendChild(total);


}


let botonCompraFinalizada = document.getElementById('comprar');
botonCompraFinalizada.addEventListener('click', () => {
  productosAgregados = [];
  contenedorCarro.innerHTML = '';
  if (productosAgregados.length > 0) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'compra finalizada con exito',
      showConfirmButton: false,
      timer: 1500
    })
  } else {
    Swal.fire({
      title: 'No hay productos en el carro',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  productosAgregados = [];
  contenedorCarro.innerHTML = '';
  suma = 0;
  sumaProductos();
  window.localStorage.setItem("array", JSON.stringify(productosAgregados));

});

function tituloProductos() {
  const titulosProductos = document.getElementById('titulosProductos');
  const tituloH3 = document.createElement('h3');
  tituloH3.setAttribute('class', 'titulo-producto-oferta');
  tituloH3.innerHTML = "PRODUCTOS";
  titulosProductos.appendChild(tituloH3);


}

function tituloOfertas() {
  const titulosProductos = document.getElementById('titulosProductos');
  const tituloH3 = document.createElement('h3');
  tituloH3.setAttribute('class', 'titulo-producto-oferta');
  tituloH3.innerHTML = "OFERTAS";
  titulosProductos.appendChild(tituloH3);
}