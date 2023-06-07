//01
paises.unshift("Brasil")
console.log(paises)
//02
const apenasMaiusc = frutas.filter((palavra) => palavra[0] == palavra[0].toUpperCase())
console.log(apenasMaiusc)
//03
const pokemonJoin = pokemon.join("-")
console.log(pokemonJoin)
//04
const colabDevs = colaboradores.filter((colab) => colab.funcao == 'Desenvolvedora')
console.log(colabDevs)
//05
 let produtosNovo = produtos.map((produto) => produto.precoUnitario+1.15)
 console.log(produtosNovo)
//06
console.log(tarefas[0].reuniao)
//07
function calcNotaFinal (aluna) {
    console.log(aluna.nome)
    let notaFinalMat = aluna.notas[0].nota * aluna.notas[0].peso
    console.log(`Nota Final (Matemática): ${notaFinalMat}`)
    let notaFinalPort = aluna.notas[1].nota * aluna.notas[1].peso
    console.log(`Nota Final (Português): ${notaFinalPort}`)
    console.log("=======================")
}
let notasFinal = notasAlunas.forEach(calcNotaFinal)
//08
let profissionaisTI = pessoas.filter((pessoa) => pessoa.area == "TI")
 console.log(profissionaisTI)
//09
const numSoma = num.reduce((total,atual) =>total+atual)
console.log(numSoma)
//10
listaNomes.push("Beatriz")
console.log(listaNomes)
//11
listaNomes.pop()
console.log(listaNomes)