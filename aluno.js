/* Micro desafio - Passo 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de 
faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.*/

class aluno {
    constructor(nome, quantidadeDeFaltas, notas){
        this.nome = nome;
        this.quantidadeDeFaltas = quantidadeDeFaltas;
        this.notas = notas;
    }

/* Micro desafio - Passo 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.*/    

    calcularMedia() {
        return this.notas.reduce((nota,outraNota) => nota + outraNota) / this.notas.length;
    }
  
/* Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.*/

    faltas() {
        this.quantidadeDeFaltas++;
    }
};

module.exports = aluno;