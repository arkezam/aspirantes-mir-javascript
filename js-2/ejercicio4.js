const join = (arreglo) => {
    let a = '';
    for(let item of arreglo){
        a += item + ' ' 
    }
  return a
} 

miarre = [1,14,8,9]

console.log(join(miarre))
