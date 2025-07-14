# Alura-Logica-de-programa-o-funcoes-e-listas-com-javascript
📚 Este repositório foi criado como parte do conteúdo didático de aulas de lógica de programação, com JavaScript para explorar conceitos fundamentais como estruturas de listas (arrays) e funções.  

🎯 Objetivos

 * Compreender a lógica por trás das listas (arrays) e como manipulá-las.
 * Desenvolver e aplicar funções para resolver problemas.
 * Praticar a decomposição de tarefas em passos lógicos e reutilizáveis.
 * Aprender boas práticas de organização de código.

DESAFIOS

CONTEÚDO DE FUNÇÕES 

**2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.**

```ruby
let cidade, numero1, numero2, soma;
let alterarH1 = document.querySelector("h1");
alterarH1.innerHTML = ("Hora do Desafio");
```

3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

```ruby
function consolePressionado(){
    console.log("O botão console foi pressionado.");
}
```

4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

```ruby
function alertaPressionado(){
    console.log("Eu amo JavaScript.");
}
```

5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

```ruby
function perguntarCidade() {
    cidade = prompt("Digite o nome de uma cidade do brasil.");
    alert(`Estive em ${cidade} e lembre de você`);
}
```

6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

```ruby
function somarNumeros(){
    alert("Digite dois números inteiros");
    numero1 = parseInt(prompt("Número 1"));
    numero2 = parseInt(prompt("Número 2"));
    soma = numero1 + numero2;
    alert(soma);
}
```

7. Criar uma função que exibe "Olá, mundo!" no console.
   
```ruby
function olaMundo(){
    console.log("Olá, mundo!"); 
}
olaMundo();
```

8. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
   
```ruby 
let nome = prompt("Digite seu nome");
function saudacao(nome){
    console.log (`Olá, ${nome}!`);
}
saudacao(nome);
```

9. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

```ruby
let num1 = parseInt(prompt("Digite um número para ser multiplicado por 2"));
function dobrar(num1){
    let dobro = num1 * 2;
    console.log(`o dobro de ${num1} é ${dobro}`);
}
dobrar(num1);
```

10. Criar uma função que recebe três números como parâmetros e retorna a média deles.

```ruby 
alert("digite 3 números para calcular a média entre eles");
let n1 =  parseInt(prompt("Digite o número 1"));
let n2 =  parseInt(prompt("Digite o número 2"));
let n3 =  parseInt(prompt("Digite o número 3"));
function mediaDeTresNumeros(n1, n2, n3){
    let media = (n1 + n2 + n3)/3
    console.log(`a média dos números ${n1}, ${n2} e ${n3} é igual a: ${media}`);
}
mediaDeTresNumeros(n1, n2, n3);
```

11. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

```ruby
alert("Digite 2 numeros para comparar e mostrar qual é maior");
let numero1 = parseInt(prompt("Digite o número 1"));
let numero2 = parseInt(prompt("Digite o número 2"));
let comparacao;
function comparaNumeros(numero1, numero2){
    comparacao = numero1 > numero2 ? `o número ${numero1} é maior que ${numero2}` : `o número ${numero2} é maior que ${numero1}`;
    console.log(comparacao);
}
comparaNumeros(numero1, numero2);
```

12. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

```ruby
let numero = parseInt(prompt("Digite um número para ser multiplicado por ele mesmo"));
function potenciacao (numero){
    let multiplicacao =  numero * numero;
    console.log(`A multiplicação de ${numero} por ele mesmo é ${multiplicacao}`);
}

potenciacao(numero)
```

13. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

```ruby
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
```

14. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

```ruby
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

function calcularFatorialDeUmNumero(numero){
    let fatorial = 1;
    let contador = numero;
    while (contador >= 1){
        fatorial *= contador;
        contador--;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}
calcularFatorialDeUmNumero(numero);
```

15. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

```ruby
let valorEmDolar = parseFloat(prompt("Digite um valor em dólar para realizar a conversão para o real brasileiro"));
const dolar = 4.8;

function converterDolarEmReais(valorEmDolar){
    let conversao = valorEmDolar * dolar;
    conversao = conversao.toFixed(2); 
    console.log(`a conversão de U$${valorEmDolar} é: R$${conversao}`);
}
converterDolarEmReais(valorEmDolar);
```

16. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

```ruby
let lado1 = parseFloat(prompt("Digite o tamanho de um dos lados em metro."));
let lado2 = parseFloat(prompt("Digite o tamanho so segundo lado em metro."));
let area, perimetro;
function calcularAreaEPerimetro(lado1, lado2){
    area = lado1 * lado2;
    perimetro = (lado1 * 2) + (lado2*2);
    alert(`O calculo da área da sala é: ${area}m²\nO calculo do perímetro da sala é ${perimetro}m`);
}
calcularAreaEPerimetro(lado1, lado2);
```

17. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

``` ruby
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
```

18. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

```ruby
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
```

CONTEÚDO DE ARRAYS 

19. Crie uma lista vazia, com o nome listaGenerica.
    
```ruby
const listaGenerica = []; 
```

20. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
    
```ruby
const linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
```

21. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
    
``` ruby
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
```

22. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

```ruby
const nomes1 = ["Isack", "Juliana", "Jorge"];
console.log(nomes1[1]);
```

23. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

```ruby
const nomes2 = ["Isack", "Juliana", "Jorge"];
console.log(nomes2[2]);
```

23. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

```ruby
const nomes3 = ["Isack", "Juliana", "Jorge"];
console.log(nomes3[3]);
```
