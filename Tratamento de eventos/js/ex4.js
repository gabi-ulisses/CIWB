function myListener(e) {
    
    const btn = e.target;
    const div = btn.parentElement;

    const p = document.createElement("p");

    p.textContent = "Oi, mundo!";

    div.appendChild(p);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", myListener);