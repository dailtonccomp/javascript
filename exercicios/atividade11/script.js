let res = document.getElementById('res')
function resultado() {
    let data = document.getElementById('idata').value
    if(data.length == 0) {
        window.alert('Por favor, informe data')
    } else { 
        console.log(data)
        let dia = data.substring(8, 10)
        let mes = data.substring(5,7)
        let ano = data.substring(0,4)
        res.innerHTML = `dia: ${dia}<br>mês: ${mes}<br>ano: ${ano}<br>`
        res.innerHTML += `Data informada: ${dia}/${mes}/${ano}`
    }    
}

function limpar() {    
    res.innerHTML = ''
}