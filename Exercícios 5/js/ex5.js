document.querySelectorAll(".remover").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const linha = event.target.closest("tr");
        linha.remove();
    });
});
