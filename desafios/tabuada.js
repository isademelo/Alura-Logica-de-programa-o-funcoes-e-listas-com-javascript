let multiplicador = parseInt(prompt("Digite um número e traremos toda a tabuada dele de 1 a 10."));
let multiplicando = 0;

function tabuadaDosGuri(multiplicador){
    while (multiplicando < 10){
    multiplicando ++;   
    let tabuada = multiplicador * multiplicando;

    console.log(`A multiplicação entre ${multiplicador} e ${multiplicando} é ${tabuada}`);
}
}
tabuadaDosGuri(multiplicador);