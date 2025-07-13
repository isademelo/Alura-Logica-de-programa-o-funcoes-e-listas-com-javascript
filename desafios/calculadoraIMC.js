//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
const altura = parseFloat(prompt("Digite sua altura em metros.\nEX: 1.58, 1.70, 1.80"));
const peso = parseFloat(prompt("Digite seu peso em KG."))
console.log(altura)
console.log(peso)

function calculoIMC(altura, peso){
    let imc =  peso /(altura * altura)
    imc= parseFloat(imc.toFixed(2));
    if (imc < 18.5){
        alert(`O seu IMC é = a ${imc} e você está abaixo do peso`);
    } else if ((imc >= 18.5) && (imc < 24.9)){
        alert(`O seu IMC é = a ${imc} e você está com peso normal`);
    } else if ((imc >= 25 ) && (imc < 29.9)){
        alert(`O seu IMC é = a ${imc} e você está com sobre peso`);
    } else {
        alert(`O seu IMC é = a ${imc} e você está Obeso`);
    }
}
calculoIMC(altura, peso);