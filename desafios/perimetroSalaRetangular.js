//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let lado1 = parseFloat(prompt("Digite o tamanho de um dos lados em metro."));
let lado2 = parseFloat(prompt("Digite o tamanho so segundo lado em metro."));
let area, perimetro;
function calcularAreaEPerimetro(lado1, lado2){
    area = lado1 * lado2;
    perimetro = (lado1 * 2) + (lado2*2);
    alert(`O calculo da área da sala é: ${area}m²\nO calculo do perímetro da sala é ${perimetro}m`);
}
calcularAreaEPerimetro(lado1, lado2);