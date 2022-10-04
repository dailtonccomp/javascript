const n = []
let maior = 0
let menor = 0
let res = document.getElementById('res')

function guardar() {
    let num = document.getElementById('inum')
    if(num.value.length == 0) {
        window.alert('Por favor, informe um número')
    } else {        
        n.push(Number(num.value)) //Acrescentado dados na array
        num.value = ''
    }    
}

function limpar() {
    n.splice(0, n.length); //limpando array
    res.innerHTML = ''
    maior = 0
    menor = 0
}

function maiorMenor() {
    for(let i = 0; i < n.length; i++) {
        if(n[i] >= 18) {
            maior++
        } else {
            menor++
        }
    }
    res.innerHTML += `Quantidade de maiores de idade: ${maior}. <br>`
    res.innerHTML += `Quantidade de menores de idade: ${menor}.`
}