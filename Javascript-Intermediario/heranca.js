//Herança//
class Candidates {
    constructor(firstName, surName, cpf){
        this.firstName = firstName
        this.surName = surName
        this.cpf = cpf
    }
}

class Masc extends Candidates {
    constructor(firstName, surName, cpf, reservista){
        super(firstName,surName,cpf)
        this.reservista = reservista
    }
}

const candidates1 = new Masc('Marcelo', 'Vasques', 123456789, true)
const candidates2 = new Candidates('Maria', 'Fulana', 456123456789)
console.log(candidates2)