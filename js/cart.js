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

class Productos {
  constructor(id, title, subTitle, price) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.price = price;
  }
}

const productos = [{
    id: "cubierta1",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/65R14 82T",
    price: "25.680"
  },
  {
    id: "cubierta2",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "FORMULA ENERGY",
    subTitle: "175/65R14 82T",
    price: "13.890"
  },
  {
    id: "cubierta3",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "P400 EVO",
    subTitle: "175/65R14 82T",
    price: "18.560"
  },
  {
    id: "cubierta4",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CHRONO",
    subTitle: "175/65R14 90T",
    price: "19.530"
  },
  {
    id: "cubierta5",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "CINTURATO P1",
    subTitle: "175/70R14 84T",
    price: "24.570"
  },
  {
    id: "cubierta6",
    img: "../img/cubiertas/rueda-pirelli.jpg",
    title: "XL SCORPION ATR",
    subTitle: "175/70R14 88H",
    price: "32.920"
  },
]
let productosAgregados = [];

function mostrarProductos() {
  const card = document.getElementById('card');

  for (const productosCard of productos) {
    const contentCard = document.createElement('div');
    contentCard.setAttribute('class', 'tarjeta-contenido')
    contentCard.innerHTML = ` 
                <div class="imagen"><img id="img-producto" src="${productosCard.img}" alt=""></div>
                <h2 class="title-producto">${productosCard.title}<span>${productosCard.subTitle}</span></h2>
                <div class="seccion2">
                    <p class="precio-producto">${productosCard.price}</p>
                    <button id="${productosCard.id}">Agregar</button>
                </div>`;

    card.appendChild(contentCard);
    let btnCompra = document.getElementById(`${productosCard.id}`);
    btnCompra.onclick = () => {
      productosAgregados.push(productosCard)
      console.log(productosAgregados)
      agregarAlCarro()

    };
  }
}



function agregarAlCarro() {

  const contenedorCarro = document.getElementById('contenedorCarro')
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
                        <button><img src="../img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;

    contenedorCarro.appendChild(añadiendoAlCarro);
  }
}
mostrarProductos()