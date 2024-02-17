function solucao(precos) {
    if (precos.length >= 5) {
        const lowerPrice = Math.min(...precos);
        const total = precos.reduce((acc, valor) => acc + valor, 0) - lowerPrice;
        console.log(total);
    } else {
        const total = precos.reduce((acc, valor) => acc + valor, 0);
        console.log(total);
    }
}