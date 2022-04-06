let productos = [];
let productosAgregados = [];
async function fetchProductos() {
  let product = await fetch('../js/productos.json');
  return product.json();
}


window.onload = async (e) => {
  //loader
  let traer = await fetchProductos();
  productos = traer;
  //ocultar el loader

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
  };
};

function cambioProductos() {
  let selectElement = document.querySelector('#selectProducts').value;
  const card = document.getElementById('card');
  card.innerHTML = '';
  if (selectElement === 'oferta') {
    mostrarProductosOferta()
    tituloOfertas()
  } else {
    mostrarProductos()
    tituloProductos()

  }
};

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
};

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

        productosAgregados = obtenerProductos();
        let findIndex = productosAgregados.findIndex(e => e.id === productosCard.id)

        if (findIndex >= 0) {
          let element = productosAgregados[findIndex];
          element.cantidad++;
          productosAgregados[findIndex] = element;

        } else {

          productosAgregados.push(productosCard);

          console.log(productosCard);
        }
        window.localStorage.setItem("array", JSON.stringify(productosAgregados));

        Swal.fire({
          title: 'Producto Agregado al Carrito',
          text: `${productosCard.title}: $${productosCard.price}`,
          imageUrl: `${productosCard.img}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      };
    };
  };
};


function obtenerProductos() {
  let productos = JSON.parse(window.localStorage.getItem("array"));
  if (!productos) {
    productos = [];
  }

  return productos;

}


function mostrarCarrito() {
  const contenedorCarro = document.getElementById('contenedorCarro');
  contenedorCarro.innerHTML = '';
  productosAgregados = JSON.parse(window.localStorage.getItem("array"));
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
                      <div id="numberCantidad" class="btn-number">
                      <p>${carro.cantidad}</p>
                      </div>
                      <div class="btn-delete">
                        <button id="btn-delete${carro.id}"><img src="../img/iconos/rectangle-xmark-solid.svg" alt = "" ></button> 
                      </div> 
                   </div> 
              </div>`;

    contenedorCarro.appendChild(añadiendoAlCarro);
    console.log(carro);
    console.log(contenedorCarro);


    let idBtn = "btn-delete" + carro.id;
    let btnDelete = document.getElementById(idBtn);
    btnDelete.onclick = () => {

      productosAgregados = obtenerProductos();
      for (let i = 0; i < productosAgregados.length; i++) {
        if (productosAgregados[i].id == carro.id) {
          productosAgregados.splice(i, 1);
          window.localStorage.setItem("array", JSON.stringify(productosAgregados));
          mostrarCarrito();
        };
      };
      sumaProductos();
    };
  };
  sumaProductos();
};



function sumaProductos() {
  let suma = 0;
  const compra = document.getElementById('compra');
  const total = document.createElement('span');
  total.setAttribute('class', 'total');
  /*   let totales = productosAgregados.reduce((acumulador, item) => acumulador + item.price, 0) */

  productosAgregados = obtenerProductos();
  for (const iterator of productosAgregados) {
    suma += iterator.price * iterator.cantidad;
  };
  total.innerHTML = "";
  compra.innerHTML = "";
  total.innerHTML = `Total $ ${suma}`;
  compra.appendChild(total);
};

let botonCompraFinalizada = document.getElementById('comprar');

if (botonCompraFinalizada) {
  botonCompraFinalizada.addEventListener('click', () => {
    contenedorCarro.innerHTML = '';
    if (productosAgregados.length > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'compra finalizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
      productosAgregados = [];
      window.localStorage.setItem("array", JSON.stringify(productosAgregados));
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
    };
    productosAgregados = [];
    contenedorCarro.innerHTML = '';
    suma = 0;
    sumaProductos();
  });
}

function tituloProductos() {
  const titulosProductos = document.getElementById('titulosProductos');
  titulosProductos.innerHTML = '';
  const tituloH3 = document.createElement('h3');
  tituloH3.setAttribute('class', 'titulo-producto-oferta');
  tituloH3.innerHTML = "PRODUCTOS";
  titulosProductos.appendChild(tituloH3);
};

function tituloOfertas() {
  const titulosProductos = document.getElementById('titulosProductos');
  titulosProductos.innerHTML = '';
  const tituloH3 = document.createElement('h3');
  tituloH3.setAttribute('class', 'titulo-producto-oferta');
  tituloH3.innerHTML = "OFERTAS";
  titulosProductos.appendChild(tituloH3);
}