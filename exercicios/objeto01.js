let amigo = {nome:'Dailton', 
sexo:'M', 
peso:83.3, 
engordar(p=0){
    console.log('engordou')
    this.peso +=p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)