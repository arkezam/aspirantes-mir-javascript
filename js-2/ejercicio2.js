
const max = (arreglo) =>{

    let mayor = arreglo[0]; 
        for(let j = 0; j < arreglo.length ; j++){
            if(arreglo[j]>mayor){
                mayor = (arreglo[j])
            }
        }
    return mayor
}
 
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined