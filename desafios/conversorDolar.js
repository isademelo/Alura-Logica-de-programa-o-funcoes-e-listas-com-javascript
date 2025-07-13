//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valorEmDolar = parseFloat(prompt("Digite um valor em dólar para realizar a conversão para o real brasileiro"));
const dolar = 4.8;

function converterDolarEmReais(valorEmDolar){
    let conversao = valorEmDolar * dolar;
    conversao = conversao.toFixed(2); 
    console.log(`a conversão de U$${valorEmDolar} é: R$${conversao}`);
}
converterDolarEmReais(valorEmDolar);