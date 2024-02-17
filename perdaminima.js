function solucao(precos) {
    let minLoss = Infinity;
    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            if (precos[j] < precos[i] && precos[i] - precos[j] < minLoss) {
                minLoss = precos[i] - precos[j];
            }
        }
    }

    return minLoss;
}