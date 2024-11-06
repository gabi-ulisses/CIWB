function removerLinha(id) {
    // Seleciona todas as linhas da tabela
    const tabelaBody = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];
    const linhas = tabelaBody.getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {
        const cellId = linhas[i].cells[0].textContent; 

        if (parseInt(cellId) === id) {
            tabelaBody.removeChild(linhas[i]); 
            break;
        }
    }
}