const n = []
let i = 0
function guardar() {
    let num = document.getElementById('inum')
    if(num.value.length == 0) {
        window.alert('Por favor, informe um número')
    } else {        
        for(i = 0; i < 4; i++) {
            n[i] = nNumber(num.value)
        }
        res.innerHTML = `numeros é: ${n}`
    }    
}

function quadrado() {
    for(i = 0; i < 4; i++) {
        res.innerHTML = `numeros é: ${n}`
    }
}