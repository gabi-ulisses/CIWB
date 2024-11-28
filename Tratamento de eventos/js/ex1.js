document.getElementById("marca").addEventListener("change", function() {
    const marca = this.value;
    const logo = document.getElementById("logo");

    // Verifique se a chave `marca` existe em `logos` antes de tentar exibir a imagem.
    const logos = {
        audi: "img/audi.png",
        bmw: "img/bmw.png", // Corrija o caminho para o caminho correto da imagem
        mercedes: "img/mercedes.png",
        volvo: "img/volvo.png"
    };

    if (logos[marca]) {
        logo.src = logos[marca];
        logo.style.display = "block"; // Exibe a imagem se o valor da marca for válido
    } else {
        logo.style.display = "none"; // Esconde a imagem se a marca não for encontrada
    }
});
