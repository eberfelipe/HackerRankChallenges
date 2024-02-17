function solucao(notas) {
    notas.sort((a, b) => a - b);

    notas.shift();
    notas.pop();

    const media = notas.reduce((acc, cur) => acc + cur, 0) / notas.length;
    console.log(media);
}