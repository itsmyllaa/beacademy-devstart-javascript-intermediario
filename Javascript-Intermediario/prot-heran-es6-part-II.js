//Prototype e Herança com uso de classe

//Prototypes
function Pessoa (nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this. peso = peso;
}

//const marcelo = new Pessoa('Marcelo', 44, 88);
//console.log(Pessoa.prototype)
const pessoa = 'Marcelo'

const notebook = {
    cor: 'preta',
    ano: 2022,
    especifications: function(value) {
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)
console.log(dell.especifications(5000))