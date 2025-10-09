function diaDaSemana() {
    let dia = new Date().getDay();

    console.log(dia)

    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "domingo";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "segunda";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "terça";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "quarta";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "quinta";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " + cor;
    }
}

