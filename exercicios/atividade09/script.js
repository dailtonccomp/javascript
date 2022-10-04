/*
let res = document.getElementById('res')

function guardar() {
    
    
}

function lerDados() {
    let pessoa = {}

    let nome = document.getElementById('inome').value
    let idade = document.getElementById('iidade').value

    if(nome.length == 0 || idade.length == 0) {
        window.alert('Por favor, preencha os campos nome e idade')
    } else {
        nome.value = ''
        idade.value = ''
    }
}

function limpar() {
    n.splice(0, n.length); //limpando array
    res.innerHTML = ''
    maior = 0
    menor = 0
}

function alturaSexo() {
    // for(let i = 0; i < n.length; i++) {
    //     if(n[i] >= 18) {
    //         maior++
    //     } else {
    //         menor++
    //     }
    // }
    // res.innerHTML += `Quantidade de maiores de idade: ${maior}. <br>`
    //res.innerHTML += `Quantidade de menores de idade: ${menor}.`
    res.innerHTML = pessoa.nome + "<br>"
    res.innerHTML += pessoa.idade
    
}*/
class Pessoa {
    constructor() {
        this.id = 1;
        this.arrayPessoas = [];        
    }

    salvar() {
        let pessoa = this.lerDados();

        if(this.validaCampos(pessoa)) {
            this.adicionar(pessoa);
        }
         console.log(this.arrayPessoas);
    }

    adicionar(pessoa) {
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados() {
        let pessoa = {};

        pessoa.id = this.id;
        pessoa.alturaPessoa = document.getElementById('ialtura').value;
        pessoa.sexoPessoa = document.getElementById('isexo').value;

        return pessoa;
    }

    validaCampos(pessoa) {
        let msg = '';

        if(pessoa.alturaPessoa == '') {
            msg += '- Informe a altura da pessoa \n';
        }

        if(pessoa.sexoPessoa == '') {
            msg += '- Informe o sexo da pessoa \n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }
}

var pessoa = new Pessoa();