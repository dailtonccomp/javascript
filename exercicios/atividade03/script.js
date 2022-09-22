function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    let calculo = []
    var calc = ini.value + passo.value
    for(var i = ini.value; i < fim.value; i++){          
        //contagem
        res.innerHTML = `indice ${i}`
    }
}