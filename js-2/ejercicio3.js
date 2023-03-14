const maxIndex = (arreglo)=>{
    let mayor = 0; 
    let index = -1;
    for(let indice = 0; indice < arreglo.length ; indice++){
        if(arreglo[indice]>mayor){
            mayor = arreglo[indice]
            index = indice
        }
    }
return index;
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1