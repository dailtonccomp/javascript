function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    // let calculo = []
    var calc = ini.value
    while(calc <= fim) {              
        console.log(`${calc}`)
        calc = calc + passo
        res.innerHTML = 'calc'
    }
}