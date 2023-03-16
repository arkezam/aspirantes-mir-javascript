// En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
// Agrégale una propiedad nombre con valor “Sandwich”.
// Agrégale una propiedad ingredientes con un arreglo vacío.
// Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
// nombre: “Pan”
// cantidad: 2
// Agrega otro ingrediente al arreglo con las siguientes propiedades:
// nombre: “Queso”
// cantidad: 1
// Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
// Suma todos las cantidades de los ingredientes y muestra el resultado en consola.


let receta = {};

receta.nombre = 'Sanwich';

receta.ingredientes = [];

receta.ingredientes.push({nombre:'pan', cantidad: 2})
receta.ingredientes.push({nombre:'queso', cantidad: 1})

console.log(receta)


console.log(receta.ingredientes[0].nombre)

let cantidad_total = receta.ingredientes.reduce((total,ingredientes) => total + ingredientes.cantidad,0)
 
console.log(cantidad_total)