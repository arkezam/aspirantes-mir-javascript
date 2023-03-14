
// utilizando programacion funcional con reduce

const sum = (arreglo) => arreglo.reduce((a,b)=> a + b ,0);

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


// Utilizando for in
const sum2 = (arreglo2) => {
    let acc = 0
    for(let key of arreglo2 ){
        acc += key
    }
    return acc
}

console.log("-------- Otra Forma ----------")
console.log(sum2([1, 2, 3])) // 6
console.log(sum2([10, 8, 12, 5])) // 35
console.log(sum2([])) // 0
