// En un archivo llamado object1.js Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:
// nombre - "Pedro Perez"
// edad - 30
// activo - true
// hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano".
// Imprime en la consola el valor de la llave edad.
// Agrega una propiedad con llave estatura y valor 1.8
// Elimina la propiedad con llave activo.
// Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
// Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
// Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.-

const pedro = {
    nombre: "Pedro Perez",
    edad: "30",
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda:() => {
        return "Hola, me llamo " + pedro.nombre 
    }
} 

console.log(pedro.saluda())


// console.log(pedro.edad);

pedro.estatura = 1.80

delete pedro.activo

// console.log(pedro)
 
for(const [clave, valor] of Object.entries(pedro)){
     console.log(clave +" : " + valor)
}

