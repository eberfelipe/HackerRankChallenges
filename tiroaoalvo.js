function solucao(disparos) {
    let acimaDe70 = 0;

    for (let pontuacao of disparos) {
        if (pontuacao > 70) {
            acimaDe70++;
        }
    }

    if (acimaDe70 >= 3) {
        console.log(acimaDe70);
    } else {
        console.log("ELIMINADO");
    }
}