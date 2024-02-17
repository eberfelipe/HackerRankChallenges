function solucao(letra, palavras) {
    let counterWords = 0;
    for (let palavra of palavras) {
        if (!palavra.startsWith(letra)) {
            counterWords++;
        }
    }
    return counterWords;
}