//Prototype e Herança (sem uso de classes)

/*
        O prototype é um objeto adicionado a uma função quando esta é criada. 
        Dá acesso aos métodos e prioridades do protótipo do construtor responsável por criar este objeto.
        O prototype de um construtor permite que seus membros sejam compartilhados por todas as instâncias.
        É o mesmo que dizer que as instâncias herdam os membros de uma função construtora.
        Assim, cada objeto concreto (instância) vai ter seus próprios dados.
        Para manipular os dados conforme a regra de negócio, todas as instâncias terão acesso ao método prototype.
 */
//prototype
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const Marcelo = new Pessoa('Marcelo', 44);
console.log(Pessoa.prototype)

const notebook = {
    cor:'preta',
    ano: 2022,
    especifications: function(value){
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)
console.log(dell.especifications(5000))