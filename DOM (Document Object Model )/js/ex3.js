function removerLinha(id) {
    // Obtém o corpo da tabela (tbody) a partir do elemento com id "tabela-produtos"
    const tabelaBody = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];
    
    // Obtém todas as linhas (tr) dentro do corpo da tabela (tbody)
    const linhas = tabelaBody.getElementsByTagName("tr");

    // Itera sobre todas as linhas da tabela
    for (let i = 0; i < linhas.length; i++) {
        // Obtém o conteúdo da primeira célula (primeiro <td>) de cada linha
        const celulaId = linhas[i].cells[0].textContent;

        // Verifica se o id da célula corresponde ao id passado como argumento para a função
        if (parseInt(celulaId) === id) {
            // Se encontrar a linha com o id correspondente, remove essa linha do corpo da tabela
            tabelaBody.removeChild(linhas[i]);
            // Encerra o loop após remover a linha (já que encontrou o id)
            break;
        }
    }
}
