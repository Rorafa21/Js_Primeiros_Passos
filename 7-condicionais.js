console.log("Trabalhando com condicionais")
                        // [] <== conta como lista
const listaDeDestinos = new Array(
    "Salvador" ,
    "São Paulo" ,
    "Rio de Janeiro" ,
)
const idadeComprador = 15
const estaAcompanhada = true

console.log("Destinos possiveis:")
console.log(listaDeDestinos)

if (idadeComprador >= 18){
    console.log("Comprador maior de idade. :D")
    listaDeDestinos.splice(1,1) //removendo item
}else if
    (estaAcompanhada){
        console.log("Comprador está acompanhado")
        listaDeDestinos.splice(1,1)
    }else{
        console.log("Comprador não é maior de idade!!!")
    }
    


    


console.log(listaDeDestinos)





