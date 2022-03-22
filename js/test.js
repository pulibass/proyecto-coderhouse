//bucle
/* 
let x = 0;
while( x<10 ){

    console.log(x);
    x++;
}
 */
let numeros = [{
        nombre: "Pintura",
        precio: 23
    },
    {
        nombre: "lija",
        precio: 55
    },
    {
        nombre: "pincel",
        precio: 79
    },
];
//0  1  2 


//acceder a un valor de un arrelgo....
//se escribe el nombre del arreglo en este caso numeros
//numeros[indice]
// numers.length -1 -->ultimo indice.

//la forma nativa
let suma = 0;
for (i = 0; i < numeros.length; i++) {
    /* console.log(numeros[i]) /// muestro los valores
    //quiero que muestres el indice del arreglo
    console.log(i) */
    suma += numeros[i].precio;
    console.log("este es el valor " + numeros[i].precio + " este es el indice " + i + " el largo del arreglo es " + numeros.length)

}

console.log("suma de primero " + suma)

//Esta forma es del metodo foreach
suma = 0;
numeros.forEach((elementActual) => {
    console.log("este es el valor del foreach: " + elementActual.precio + " el largo del arreglo es " + numeros.length);
    suma += elementActual.precio
});
console.log("suma del segundo " + suma)


suma = 0;
for (let element of numeros) {

    console.log("este es el valor del forOf: " + element.precio + " el largo del arreglo es " + numeros.length)
    suma += element.precio;

}
console.log("suma del tercero " + suma)






/* console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[6])
console.log(numeros[numeros.length - 1])
                        numeros[2]

numeros[2] */
//console.log(n) //5

/*for(let i=10;i<10; i++){ 

console.log(9)


} */