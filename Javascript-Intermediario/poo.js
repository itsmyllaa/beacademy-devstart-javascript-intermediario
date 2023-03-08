//POO - Programação orientada a objetos

//Orientação a Objetos//
/*
        Orientação a objetos é um paradigma utilizado para modelar coisas/objetos do mundo real que queremos representar dentro de uma aplicação.
        Em um software, estamos sempre representando de forma abstrata, objetos concretos do mundo real, ex: um cliente, um aluno, um produto e etc..
        Importante salientar que um objeto concreto no mundo real pode apresentar infinitas caracteristicas. 
        Porém, trazemos para nosso software apenas aquelas que fazem sentido para a regra de negócio.
        
        Sendo assim, para um cadastro em um sistema escolar, o tipo sanguíneo ou a altura do aluno (objeto do mundo concreto) não tenha utilidade. 
        Porém para o cadastro em uma clínica médica, estes elementos devem ser levados em consideração.

        Um dos pilares da orientação a objetos é a classe. 
        Com ela podemos criar uma abstração de um objeto do mundo real, e a partir desta, instanciar, ou seja, gerar um objeto concreto em nossa aplicação.
        
        É o exemplo do cadastramento de alunos em um sistema escolar.
        Obtemos as caracteristicas conforme as regras de negócio da nossa aplicação.
        Após isto, podemos instanciar para que o software guarde e nos retorne uma lista de alunos ou um aluno em específico com os dados que precisamos.

        Conforme explicado, as classes são utilizadas para gerar instâncias de um objeto podendo-se reutilizar código através da herança.
 */

//Classes//
/*
        Funções construtoras são utilizadas para instanciar objetos.
        Assim é possível trabalhar com a reutilização de código.

        const Foo = function(x) {
            this. x = x
        }
        const foo = new Foo('x')

        Classes em JavaScript são introduzidas no ECMAScript 2015.
        Trazem uma maneira mais simples e clara para criar objetos e lidar com heranças.
        São funções especiais que agem como funções construtoras.

        Sintaxe:

        class Person {
            constructor(){}
        }
 */

//Herança//

/*
        Com uma classe, podemos implementar as caracteristicas abstratas de um objeto. 
        A partir dela, podemos gerar diversos objetos reutilizando as caracteristicas.
        
        Exemplo:

        Em um cadastro de candidatos a um concurso, temos os dados necessários de cada candidato.
        Todos eles têm nome, CPF, então todos os candidatos são cadastrados com essas propriedades.
        Com isto é possível herdar da classe principal todos estes dados.
        Porém, apenas no caso de candidatos homens, é necessário ter cadastrado o comprovante de serviço militar obrigatório.

        Com as classes podemos instanciar objetos e também podemos instanciar outras classes. Com isto teremos classes que são extensões de outras classes.

        Então uma classe pode herdar propriedades e métodos da classe 'pai'.
 */