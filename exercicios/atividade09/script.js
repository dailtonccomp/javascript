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
            //pessoa.alturaPessoa = '';
            //pessoa.sexoPessoa = '';
        }
        // console.log(this.arrayPessoas);        
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

    resultado() {
        let res = document.getElementById('res');
        res.innerHTML = '';

        let masc = 0;
        let fem = 0;
        let maiorAltura = 0;
        let indice;

        for(let i = 0; i < this.arrayPessoas.length; i++) {
            if(this.arrayPessoas[i].sexoPessoa == "M") {
                masc++;
            } else {
                fem++;
            }
            if(parseFloat(this.arrayPessoas[i].alturaPessoa) >= maiorAltura) {
                maiorAltura = parseFloat(this.arrayPessoas[i].alturaPessoa);
                indice = i;
            }
            res.innerHTML += `${i+1}º- Altura: ${parseFloat(this.arrayPessoas[i].alturaPessoa)}, Sexo: ${this.arrayPessoas[i].sexoPessoa} <br>`;
        }

        res.innerHTML += `<br>Quantidade de sexo masculino: ${masc}.<br>`;
        res.innerHTML += `Quantidade de sexo feminino: ${fem}.<br>`;
        res.innerText += `A maior altura é: ${maiorAltura} do sexo ${this.arrayPessoas[indice].sexoPessoa}.`;
        
    }

    limpar() {
        res.innerHTML = '';
        this.arrayPessoas.splice(0, this.arrayPessoas.length);
    }
}

var pessoa = new Pessoa();