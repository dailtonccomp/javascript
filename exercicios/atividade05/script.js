var qtde_num = 0
var soma = 0

function somar() {    
    let num = document.getElementById('inum')
    let res = document.getElementById('res')
    if(num.value.length == 0) {
        window.alert('Por favor, informe um número')
    } else {
        let n = Number(num.value)
        soma = soma + n
        qtde_num++
        let media = parseFloat((soma/qtde_num).toFixed(2))
        res.innerHTML = `Média é: ${media}`
    }
    num.value = ''
    res.innerHTML += `<p>Soma: ${soma}, Quantidade de numero ${qtde_num}</p>`
}