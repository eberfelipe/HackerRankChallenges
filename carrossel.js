function solucao(sequencia) {
    let totalImages = 7;
    let actualIndex = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] === '>') {
            actualIndex++;
        } else if (sequencia[i] === '<') {
            actualIndex--;
        }

        if (actualIndex >= totalImages) {
            actualIndex = 0;
        } else if (actualIndex < 0) {
            actualIndex = totalImages - 1;
        }
    }

    console.log(actualIndex);
}