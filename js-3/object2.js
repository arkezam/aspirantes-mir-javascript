// En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades: nombre, edad, ciudad y profesión.
// Imprime en la consola el objeto "persona" completo.
// Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
// Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
// Imprime en la consola el valor de la variable "mensaje".
// Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
// Imprime en la consola la propiedad "hobbies" del objeto "persona".
// Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.


let persona = {
    nombre:'Mauricio',
    edad:20,
    ciudad:'Lima',
    profesion: 'Software'
}

// console.log(persona)
function presentacion(persona){
    let cadena = ''
    for(const [clave, valor] of Object.entries(persona)){
         cadena += clave + ": " + valor + "; "
   }
   return cadena
}

let mensaje = presentacion(persona)

console.log(mensaje)

persona.hobies = ['jugar', 'cantar','leer','escuchar music']

console.log(persona.hobies)

persona.hobies.forEach(x => console.log(x));

