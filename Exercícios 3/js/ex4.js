function exercicio4() {
    let produtos = [
        {
            id: 1,
            nome: "Caneta BIC Cristal 0.7mm",
            preco: 6.60,
            descontoAVista: 10
        },
        {
            id: 2,
            nome: "Caneta Esferográfica Trilux",
            preco: 5.50,
            descontoAVista: null
        },
        {
            id: 3,
            nome: "Lapiseira 0.5mm Pentel",
            preco: 27.90,
            descontoAVista: 15
        },
        {
            id: 4,
            nome: "Grafite Fino 0.5mm HB 2 Faber-Castell",
            preco: 10.90,
            descontoAVista: 5
        },
        {
            id: 5,
            nome: "Pincel quadro branco recarregável",
            preco: 9.80,
            descontoAVista: null
        }
    ];
    
    console.log("Nome: ",produtos[2].nome);
    console.log("Preço: R$",produtos[2].preco);

}