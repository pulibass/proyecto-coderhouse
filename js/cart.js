/* const btnCompra = document.querySelectorAll('#btn-compra'); //con este propiedad selecciono todos los botones de compra
btnCompra.forEach((añadirAlCarro) => { // uso la variable con un foreach(paso el parametro click creo una funcion flecha que se va a llamr añadirAlCarro
    añadirAlCarro.addEventListener('click', añadirAlCarroClick); //creo un evento click y le paso la funcion que se va a llamar añadirAlCarroClick

})
let contenedorCarro = document.querySelector('.contenedor-productos'); //llamo al contenedor de productos del carro


function añadirAlCarroClick(event) { //creo una funcion que va a ser un evento el cual viene del evento click creado en btn compra
    const boton = event.target; //creo una variable que va a ser el boton que se va a clickear
    const itemProductos = boton.closest('.tarjeta-contenido'); //llamo al contenedor de la tarjeta que se va a clickear

    const imagen = itemProductos.querySelector('#img-producto').src; //llamo la etiqueta img-producto que esta en el html y su contenido
    const titulo = itemProductos.querySelector('.title-producto').textContent; //llamo la etiqueta title-producto que esta en el html y su contenido
    const precio = itemProductos.querySelector('.precio-producto').textContent; //llamo la etiqueta precio-producto que esta en el html y su contenido

    añadirTodosLosItems(titulo, precio, imagen); //llamo a la funcion añadirTodosLosItems

}

function añadirTodosLosItems(titulo, precio, imagen) { //paspamos los parametros que se van a añadir al carro
    let añadiendoAlCarro = document.createElement('div');
    añadiendoAlCarro.classList.add("carro-compras") //creo un div nuevo en el html que va a ser el contenedor del carro
    const contenidoAñadido =
        `

              <div class = "producto">
                  <div class="imagen-carro">
                    <div class="imagen">
                      <img src = ${imagen} alt = "" >
                    </div> 
                     <div class = "title-producto">
                      <h2>${titulo}</h2>
                    </div> 
                  </div> 
              </div> 
              <div class = "precio" >
                  <div class = "price">
                      <p>${precio}</p> 
                 </div> 
              </div> 
              <div class = "cantidad">
                    <div class = "button-cantidad" >
                      <div class = "btn-number" >
                         <input type = "number"value = "number" >
                      </div>
                      <div class = "btn-delete" >
                        <button><img src = "/img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;
    añadiendoAlCarro.innerHTML = contenidoAñadido; //la variable que creo para agregar el div le digo que va a añadir el contenido de lo que esta en la variable que contiene todo el contenido a agregar
    contenedorCarro.append(añadiendoAlCarro); //con append le digo que va a añadir el div contenedor-carro que contiene todo el contenido a agregar

    añadirElTotal(); //llamo a la funcion añadirElTotal
}

function añadirElTotal() {
    total = 0; //creo una variable que va a ser el total y comienza en 0;
    const totalProductos = document.querySelector('.total').textContent; //creo una variable que va a ser todos los precios de los productos
    const precioProductos = document.querySelectorAll('.precio-producto'); //creo una variable que va a ser todos los precios de los productos
    precioProductos.forEach((precio) => { //creo una funcion flecha que se va a llamar precio
        total += parseInt(precio.textContent); //le digo que la variable total va a sumar el precio de los productos
    })
    console.log(precioProductos)
} */

const productos = [{
    id: "cubierta1",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/65R14 82T",
    price: 25680,
    producto: true
  },
  {
    id: "cubierta2",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "FORMULA ENERGY",
    subTitle: "175/65R14 82T",
    price: 13890,
    producto: true
  },
  {
    id: "cubierta3",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "P400 EVO",
    subTitle: "175/65R14 82T",
    price: 18560,
    producto: true
  },
  {
    id: "cubierta4",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CHRONO",
    subTitle: "175/65R14 90T",
    price: 19530,
    producto: true
  },
  {
    id: "cubierta5",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/70R14 84T",
    price: 24570,
    producto: true
  },
  {
    id: "cubierta6",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "XL SCORPION ATR",
    subTitle: "175/70R14 88H",
    price: 32920,
    producto: true
  },
  {
    id: "amortiguador1",
    img: "../img/amortiguadores/amortiguador-1.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "CHEVROLET CORSA",
    price: 18560,
    producto: true
  },
  {
    id: "amortiguador2",
    img: "../img/amortiguadores/amortiguador-2.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "FIAT SIENA, PALIO",
    price: 15650,
    producto: true
  },
  {
    id: "amortiguador3",
    img: "../img/amortiguadores/amortiguador-3.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "FORD FIESTA",
    price: 20210,
    producto: true
  },
  {
    id: "amortiguador4",
    img: "../img/amortiguadores/amortiguador-4.jpg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "RENAULT CLIO",
    price: 19860,
    producto: true
  },
  {
    id: "amortiguador5",
    img: "../img/amortiguadores/amortiguador-5.jpeg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "VOLSKWAGEN GOL",
    price: 19520,
    producto: true
  },
  {
    id: "amortiguador6",
    img: "../img/amortiguadores/amortiguador-6.jpeg",
    title: "AMORTIGUADORES DELANTEROS",
    subTitle: "PEUGEOT PARTNER",
    price: 20185,
    producto: true
  },
  {
    id: "freno1",
    img: "../img/frenos/freno-1.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "CHEVROLET AGILE, CELTA Y PRISMA, FRASLE",
    price: 22680,
    producto: true
  },
  {
    id: "freno2",
    img: "../img/frenos/freno-2.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FIAT ADVENTURE Y PALIO, FRASLE",
    price: 19890,
    producto: true
  },
  {
    id: "freno3",
    img: "../img/frenos/freno-3.jpg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "VOLSKWAGEN BORA, FOX Y POLO, FRASLE",
    price: 22350,
    producto: true
  },
  {
    id: "freno4",
    img: "../img/frenos/freno-4.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FORD ECO SPORT, FRASLE",
    price: 23190,
    producto: true
  },
  {
    id: "freno5",
    img: "../img/frenos/freno-5.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "FIAT TORO Y CHRONO, FRASLE",
    price: 21250,
    producto: true
  },
  {
    id: "freno6",
    img: "../img/frenos/freno-6.jpeg",
    title: "PASTILLAS DE FRENOS",
    subTitle: "CHEVROLET SONIC, CRUZE, FRASLE",
    price: 23850,
    producto: true
  },
  {
    id: "oferta1",
    img: "../img/ofertas/oferta-1.jpeg",
    title: "SERVICE FOCUS 2.0 o 1.6",
    subTitle: "CAMBIO DE ACEITE 5W30 Y FILTROS",
    price: 8.550,
    producto: false
  },
  {
    id: "oferta2",
    img: "../img/ofertas/oferta-2.jpg",
    title: "SERVICE AMAROK 2.0",
    subTitle: "CAMBIO DE ACEITE 5W40 Y FILTROS",
    price: 7560,
    producto: false
  },
  {
    id: "oferta3",
    img: "../img/ofertas/oferta-3.jpeg",
    title: "SERVICE ONIX 1.6",
    subTitle: "CAMBIO DE ACEITE 5W30 Y FILTROS",
    price: 8.550,
    producto: false
  },
  {
    id: "oferta4",
    img: "../img/ofertas/oferta-4.jpeg",
    title: " CAMBIO DE AMORTIGUADORES TRASEROS",
    subTitle: "FIAT PALIO, SIENA",
    price: 9580,
    producto: false
  },
  {
    id: "oferta5",
    img: "../img/ofertas/oferta-5.jpg",
    title: " CAMBIO DE AMORTIGUADORES TRASEROS",
    subTitle: "CHEVROLET CORSA",
    price: 11350,
    producto: false
  },
  {
    id: "oferta6",
    img: "../img/ofertas/oferta-6.jpg",
    title: "CAMBIO DE AMORTIGUADORES DELANTEROS",
    subTitle: "RENAULT CLIO",
    price: 9280,
    producto: false
  },
  {
    id: "oferta7",
    img: "../img/ofertas/oferta-7.jpg",
    title: "BATERIA BOSCH S4",
    subTitle: "PARA VEHICULOS PARTICULARES",
    price: 16200,
    producto: false
  },
  {
    id: "oferta8",
    img: "../img/ofertas/oferta-8.jpg",
    title: "BATERIA MATEO 12X55",
    subTitle: "EXCLUSIVO PARA TAXIS, REMISES",
    price: 11520,
    producto: false
  },
  {
    id: "oferta9",
    img: "../img/ofertas/oferta-9.jpg",
    title: "BATERIA MOURA 12X40",
    subTitle: "PARA CAMIONETAS 4X4 Y CAMIONES",
    price: 23580,
    producto: false
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
      productosAgregados.push(productosCard)
      agregarAlCarro()
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
                         <input type="number"value = "number">
                      </div>
                      <div class="btn-delete">
                        <button id="btn-delete"><img src="../img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;

    contenedorCarro.appendChild(añadiendoAlCarro);
    const btnDelete = document.getElementById('btn-delete');
    btnDelete.onclick = () => {
      console.log("producto eliminado")
    }
    if (btnDelete == "true") {
      contenedorCarro.innerHTML = '';

    }
    sumaProductos()
  }
}
mostrarProductos()

function sumaProductos() {
  /*   let totales = productosAgregados.reduce((acumulador, item) => acumulador + item.price, 0) */
  let suma = 0;
  for (const iterator of productosAgregados) {
    suma += iterator.price
  }
  const compra = document.getElementById('compra');
  const total = document.createElement('span');
  total.innerHTML = "";
  compra.innerHTML = "";
  total.innerHTML = `Total $ ${suma}`;
  compra.appendChild(total);


};




const botonCompraFinalizada = document.getElementById('comprar');
botonCompraFinalizada.onclick = () => {
  alert("gracias por su compra")
};