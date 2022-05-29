function booleanToString(elemento) {
    if (elemento == true){
        elemento = 'True'
        return elemento
    } else {
        elemento = 'False'
        return elemento
    }
} 

let teste = false
console.log( typeof booleanToString(teste))
console.log( typeof teste)




let tes = 'Boa noite Diego'
tes = tes.split(" ").join("")
console.log(tes)