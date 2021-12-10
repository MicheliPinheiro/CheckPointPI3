/* Micro desafio - Passo 7 - Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo 
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes 
do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo
tenha todos os métodos corretamente). */

const aluno = require ('./aluno');

const estudantes = [
    new aluno('Ana Paula', 4, [7.5, 9, 8.3, 8]),
    new aluno('Bruno', 0, [7.1, 9, 6.5, 5.5]),
    new aluno('Felippe', 3, [4, 7, 6.5, 6]),
    new aluno('Gustavo', 2, [8, 6, 9, 3]),
    new aluno('Micheli', 0, [10, 8, 9, 7]),
    new aluno('Rodrigo', 4, [7, 7.5, 9, 6.5]),
    new aluno('Thalita', 0, [4, 9, 8.5, 6.8]),   
]

module.exports = estudantes;