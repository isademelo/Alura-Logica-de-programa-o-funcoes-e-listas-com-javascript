let numero = parseInt(prompt("Digite um número para que possamos calcular o fatorial"));

let fatorial = numero;

function calcularFatorialDeUmNumero(){
while (fatorial > 1){
    let calculoFatorial = numero * fatorial
    fatorial --;
    console.log(`${numero} multiplicado por ${fatorial} é ${calculoFatorial}`);
}
}

calcularFatorialDeUmNumero()