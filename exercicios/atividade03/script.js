function contar(){    
    var ini = document.getElementById('inicio')
    ini= Number(ini.value)

    var fim = document.getElementById('fim')
    fim = Number(fim.value)
    var passo = document.getElementById('passo')
    passo = Number(passo.value)
    var res = document.querySelector('div#res')    
    if(ini == ' ' || fim == ' ') {
        res.innerHTML = 'Nenhuma caixa pode ficar em branco!'
    } else if(ini > fim) {
        res.innerHTML = 'O valor de fim não pode ser menor que o inicio!'
    }else {
        if(passo == 0) {
            passo = 1
            window.alert('Passo inválido! Considerando Passo igual a 1')
        }
        let contagem = [] 
        var calc = ini
        res.innerHTML = `inicio: ${ini}, fim: ${fim} e passo: ${passo}`
            while(calc <= fim) {             
            contagem.push(calc)
            calc = calc + passo
            }
        //     // var qtde = contagem.length
        //res.innerHTML = `${qtde} com resultado ${contagem}`        
        res.innerHTML = `${contagem[0]} &#x1F449 `
        //res.innerHTML = contagem
    }
    
}