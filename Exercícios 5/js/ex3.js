function showId(event) {
    console.log("ID do botão:", event.target.id);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", showId));
