function fibonacci(numeroLimite){
    const arrayInicial = [0, 1];
    for (let i = 2; i <= numeroLimite; i++){
        arrayInicial.push(arrayInicial[i - 2 ] + arrayInicial[i - 1]);
    }
    return arrayInicial;
}