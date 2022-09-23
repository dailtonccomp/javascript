function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    // let calculo = []    
    res.innerHTML = `inicio: ${ini.value}, fim: ${fim.value}, passo: ${passo.value} e calc = ${calc}`
    // var calc = ini.value
    // while(calc <= fim.value) {
    //     res.innerHTML = calc
    //     calc = calc + passo.value        
    // }
}