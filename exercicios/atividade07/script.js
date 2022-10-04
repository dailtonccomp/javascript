const n = []
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
}

function quadrado() {
    let maior = Math.max(...n)
    res.innerHTML += `O maior número entre  ${n} é o ${maior}.`
}