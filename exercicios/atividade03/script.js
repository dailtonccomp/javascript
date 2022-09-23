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
    } else {
        if(passo == 0) {
            passo = 1
            window.alert('Passo inválido! Considerando Passo igual a 1')
        }  
        res.innerHTML = 'Contando: '      
        var calc = ini
        var simbolo = ''
        if(ini < fim) {
            while(calc <= fim) {
                if(calc < fim){
                    simbolo = '&#x1F449'
                }else {
                    simbolo = '&#x1F3C1'
                }
                res.innerHTML += ` ${calc} ${simbolo}`                
                calc = calc + passo
            }
        }else {
            while(calc >= fim) { 
                if(calc > fim){
                    simbolo = '&#x1F449' // pode ser representado também por \u{1F449}
                }else {
                    simbolo = '&#x1F3C1'
                }
                res.innerHTML += ` ${calc} ${simbolo}`
                calc = calc - passo
            }
        }        
    }   
}

/*
    Código guanabara
    function contar{
        let ini = document.getElementById('txti')
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')

        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        {
            res.innerHTML = 'Impossível contar!'
        } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if( p <= 0) {
                window.alert('Passo inválido! Considerando PASSO 1')
                p=1
            }
            if(i < f) {
                //contagem crescente
                for(let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            } else {
                //contagem decrescente
                for(let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
    

*/

// &#x1F449
// &#x1F3C1