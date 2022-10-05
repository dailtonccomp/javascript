class OrdemCrescente {
    constructor() {
        this.id = 1;
        this.arrayOrdemDecres = [];
    }

    salvar() {
        let ordemDecres = this.lerDados();
        
        if(this.validarCampos(ordemDecres)) {
            this.adicionar(ordemDecres);            
            //console.log(this.arrayOrdemDecres);
            this.limparInput();
        }        
    }

    adicionar(ordemDecres) {
        this.arrayOrdemDecres.push(ordemDecres);
        this.id++;
    }

    lerDados() {
        let ordemDecres = {};

        ordemDecres.id = this.id;
        ordemDecres.nome = document.getElementById('inome').value;

        return ordemDecres;
    }

    validarCampos(ordemDecres) {
        let msg = '';

        if(ordemDecres.nome == '') {
            msg += '- Informe nome\n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    resultado() {
        let res = document.getElementById('res');
        res.innerHTML = '';

        for(let i = this.arrayOrdemDecres.length; i > 0; i--) {
            res.innerHTML += `Nome: ${this.arrayOrdemDecres[i-1].nome} <br>`;            
        }
    }

    limparInput() {
        document.getElementById('inome').value = '';
    }

    limpar(){
        res.innerHTML = '';
        this.arrayOrdemDecres.splice(0, this.arrayOrdemDecres.length);
    }
}

var ordem = new OrdemCrescente();