function sum(num){
    let contador = 1
    let acumulador = 0
    
    while (contador <= num){

        acumulador = acumulador + contador
        contador++;
    }
    return acumulador;
}

console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120