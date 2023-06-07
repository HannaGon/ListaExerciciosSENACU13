array.push("string")
//adiciona "string" no final da array

array.pop()
//deleta o ultimo elemento da array

array.unshift("string")
//Adiciona a "string" na primeira posição da Array

array.filter(/*arrow function*/)
/*retorna apenas resultados dentro da array que se apliquem a função
exemplo
let arrayExemplo = ["abacate", "banana", "maca", "acerola"]
retornar apenas resultados começados em A
arrayExemplo.filter((palavra)=>palavra[0]=="a")*/

array.join(" ")
//retorna uma string com todos os elementos da array, separados por " "

array.map(/*arrow function*/)
/*aplica uma função a todos os elementos da array e retorna nova array alterada
exemplo
arrayExemplo2 = [2,20,35]
arrayExemplo2.map((numero)=>numero*2)*/

forEach()
//executa uma função para todos os elementos de uma array

array.reduce(/*arrow function*/)
//reduz a array a um unico numero de acordo com a arrow function informada