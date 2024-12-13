/*function horaAtual(){
        let hora = new Date().toLocaleTimeString();

        console.log(hora);

        document.cookie = "username=Ana";

        document.getElementById("timer").textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

setInterval(horaAtual, 1000);*/


// Função para pegar o valor do cookie
function pegarCookie(nome) {
    let cookiesDecodificados = decodeURIComponent(document.cookie);
    let cookiesArray = cookiesDecodificados.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nome + "=") === 0) {
            return cookie.substring(nome.length + 1);
        }
    }
    return "";
}

// Função para definir o valor do cookie
function definirCookie(nome, valor) {
    document.cookie = nome + "=" + valor + ";path=/"; // Define o cookie sem expiração
}

// Função para atualizar o cronômetro
function atualizarContagem() {
    // Recupera o tempo restante do cookie (se existir)
    let tempoRestante = pegarCookie("tempoRestante");

    if (!tempoRestante) {
        // Se não houver cookie, define um tempo aleatório entre 8h e 12h (em milissegundos)
        let tempoAleatorio = Math.floor(Math.random() * (12 - 8 + 1) + 8); // Aleatório entre 8 e 12 horas
        let tempoEmMilissegundos = tempoAleatorio * 60 * 60 * 1000; // Convertido para milissegundos
        definirCookie("tempoRestante", tempoEmMilissegundos); // Salva no cookie
        tempoRestante = tempoEmMilissegundos; // Usa o valor do tempo aleatório gerado
    } else {
        tempoRestante = parseInt(tempoRestante); // Converte o tempo em número

        // Calcula horas, minutos e segundos restantes
        const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        // Formatação usando if para garantir dois dígitos
        let horasFormatadas = horas;
        let minutosFormatados = minutos;
        let segundosFormatados = segundos;

        if (horas < 10) {
            horasFormatadas = '0' + horas;
        }

        if (minutos < 10) {
            minutosFormatados = '0' + minutos;
        }

        if (segundos < 10) {
            segundosFormatados = '0' + segundos;
        }

        // Atualiza o cronômetro na div com o formato hh:mm:ss
        document.getElementById("timer").textContent = horasFormatadas + ':' + minutosFormatados + ':' + segundosFormatados;

        // Decrementa 1 segundo do tempo restante
        tempoRestante -= 1000;

        // Atualiza o cookie com o novo valor de tempo restante
        definirCookie("tempoRestante", tempoRestante);
    }
}


// Chama a função a cada 1 segundo
setInterval(atualizarContagem, 1000);
