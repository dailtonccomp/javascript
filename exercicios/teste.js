//criando uma arry com dados
var frutas = ['Maçã', 'Banana', 'Abacaxi'];
//mostrando o tamanho da string
console.log(frutas.length);

//pegando um dado da array, nesse caso o primeiro
var primeiro = frutas[0]
//pegando o último dado da array
var ultimo = frutas[frutas.length - 1]

//mostrando os dados acima
console.log(primeiro)
console.log(ultimo)

//mostrando dado e indice onde está localizado
frutas.forEach(function (item, indice){
    console.log(item, indice)
})

//adicionar ao início da array
var adicionar = frutas.unshift('Morango')
console.log(frutas)
//adicionando ao final da array
var adicionar = frutas.push('Laranja')
console.log(frutas)

//removendo um item do final do array
var exclui_ultimo = frutas.pop()
console.log(frutas)

//removendo um item do inicio do array
var excluir_primeiro = frutas.shift()
console.log(frutas)

//procurar o índice de um item na array
frutas.push('manga')//acrescentando fruta manga
var pos = frutas.indexOf('Banana') //caso não exista o item ele retornará o valor -1
console.log(pos)
console.log(frutas)

//Remover um item pela posição do índice
var removerItem = frutas.splice(pos, 1)
console.log(frutas)