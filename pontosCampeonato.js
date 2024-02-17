function solucao(resultados) {
    let pontos = 0;
    let vitorias = 0;
    let empates = 0;

    for (let resultado of resultados) {
        if (resultado === "V") {
            vitorias++;
        } else if (resultado === "E") {
            empates++;
        }
    }

    pontos = vitorias * 3 + empates;

    return pontos;
}