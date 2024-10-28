function exercicio7() {
    const alunos = [
        {idade: 13, altura: 1.40},
        {idade: 14, altura: 1.55},
        {idade: 12, altura: 1.45},
        {idade: 15, altura: 1.60},
        {idade: 13, altura: 1.50},
        {idade: 14, altura: 1.52},
        {idade: 15, altura: 1.68},
        {idade: 12, altura: 1.42},
        {idade: 16, altura: 1.65},
        {idade: 14, altura: 1.70},
        {idade: 13, altura: 1.48},
        {idade: 14, altura: 1.56},
        {idade: 15, altura: 1.62},
        {idade: 13, altura: 1.49},
        {idade: 14, altura: 1.54},
        {idade: 15, altura: 1.58},
        {idade: 12, altura: 1.40},
        {idade: 14, altura: 1.59},
        {idade: 16, altura: 1.66},
        {idade: 14, altura: 1.60},
        {idade: 13, altura: 1.50},
        {idade: 15, altura: 1.57},
        {idade: 13, altura: 1.53},
        {idade: 14, altura: 1.45},
        {idade: 15, altura: 1.63},
        {idade: 16, altura: 1.68},
        {idade: 14, altura: 1.49},
        {idade: 15, altura: 1.55},
        {idade: 13, altura: 1.60},
        {idade: 14, altura: 1.52}
    ];
    
    // Calcula a altura média da turma
    const somaAlturas = alunos.reduce((soma, aluno) => soma + aluno.altura, 0);
    const mediaAlturas = somaAlturas / alunos.length;
    
    // Conta quantos alunos com mais de 13 anos têm altura abaixo da média
    const alunosAbaixoMedia = alunos.filter(aluno => aluno.idade > 13 && aluno.altura < mediaAlturas).length;
    
    console.log("Número de alunos com mais de 13 anos e altura inferior à média:", alunosAbaixoMedia);
    
}