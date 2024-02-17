function solucao(primeiraLetra, segundaLetra, palavras) {
    let encontradas = false;

    for (let palavra of palavras) {
        if (palavra.startsWith(primeiraLetra) && palavra[1] === segundaLetra) {
            console.log(palavra);
            encontradas = true;
        }
    }

    if (!encontradas) {
        console.log("NENHUMA");
    }
}
