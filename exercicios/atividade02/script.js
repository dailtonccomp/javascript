function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if(ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual) //uso do length é para justamente verifica se foi digitado algo, ele ver o comprimento do dado
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - ano_nasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if( idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'img/foto-crianca-m.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-adolescente-m.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src','img/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if( idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'img/foto-crianca-f.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-adolescente-f.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}