const n = []
let v = 0
function guardar(i) {
    let num = document.getElementById('inum')
    if(num.value.length == 0) {
        window.alert('Por favor, informe um número')
    } else {        
        // for(i = 0; i < 5; i++) {
            n[i] = Number(num.value)
        // }
        num.value = ''
    }    
}

function incremento() {
    return v++
}

function limpar() {
    v = 0
    res.innerHTML = ''
}

function quadrado() {
    for(i = 0; i < 5; i++) {
        res.innerHTML += `Quadrado de ${n[i]} é: ${n[i]*n[i]} <br>`
    }
}