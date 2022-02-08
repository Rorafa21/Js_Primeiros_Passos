console.log("Trabalhando com condicionais")
// [] <== conta como lista
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro" ,
)
const idadeComprador = 15
const estaAcompanhada = false
const passagemComprada = true

console.log("Destinos possiveis:")
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1) //removendo item

} else {
    console.log("Comprador não é maior de idade!!!")
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar!!!")
}