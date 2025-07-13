//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let valorDoRaio = parseFloat(prompt("Digite o tamanho do raio da sala em metro."));
const pi = 3.14;
function calcularAreaEPerimetroDoCirculo(valorDoRaio){
    let areaCirculo = pi * (valorDoRaio * valorDoRaio); 
    let perimetroCirculo = 2 * pi * valorDoRaio; 
    areaCirculo = areaCirculo.toFixed(2);
    perimetroCirculo = perimetroCirculo.toFixed(2);
    alert(`A área da sala circular é ${areaCirculo}m².\nO perímetro da sala é ${perimetroCirculo}m`);
}
calcularAreaEPerimetroDoCirculo(valorDoRaio);