const n = []
function guardar() {
    let num = document.getElementById('inum')
    if(num.value.length == 0) {
        window.alert('Por favor, informe um número')
    } else {        
        n.push(Number(num.value))
        num.value = ''
    }    
}

function limpar() {
    n.splice(0, n.length); //limpando array
    res.innerHTML = ''
}

function quadrado() {
    for(i = 0; i < 5; i++) {
        res.innerHTML += `Quadrado de ${n[i]} é: ${n[i]*n[i]} <br>`
    }
}