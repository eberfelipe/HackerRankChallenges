function solucao(stringCorrompida) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    const result = stringCorrompida.replace(regex, '');
    return result;
}