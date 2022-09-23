function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let tabSoma = document.getElementById('selsomar')
    let tabDiv = document.getElementById('seldiv')
    let tabDim = document.getElementById('seldim')
    if(num.value.length == 0)
    {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        c=1
        tabSoma.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            tabSoma.appendChild(item)
            c++
        }
        c = 1
        tabDiv.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${(n/c).toFixed(2)}`
            tabDiv.appendChild(item)
            c++
        }
        c = 1
        tabDim.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            tabDim.appendChild(item)
            c++
        }
    }    
}