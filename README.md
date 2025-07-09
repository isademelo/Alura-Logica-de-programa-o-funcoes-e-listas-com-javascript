# Alura-Logica-de-programa-o-funcoes-e-listas-com-javascript
📚 Este repositório foi criado como parte do conteúdo didático de aulas de lógica de programação, com JavaScript para explorar conceitos fundamentais como estruturas de listas (arrays) e funções.  

🎯 Objetivos

 * Compreender a lógica por trás das listas (arrays) e como manipulá-las.
 * Desenvolver e aplicar funções para resolver problemas.
 * Praticar a decomposição de tarefas em passos lógicos e reutilizáveis.
 * Aprender boas práticas de organização de código.

DESAFIOS

**2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.**

```ruby
let cidade, numero1, numero2, soma;
let alterarH1 = document.querySelector("h1");
alterarH1.innerHTML = ("Hora do Desafio");
```

3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

```ruby
Copiar
Editar
function consolePressionado(){
    console.log("O botão console foi pressionado.");
}
```

4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

```ruby
Copiar
Editar
function alertaPressionado(){
    console.log("Eu amo JavaScript.");
}
```

5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

```ruby
Copiar
Editar
function perguntarCidade() {
    cidade = prompt("Digite o nome de uma cidade do brasil.");
    alert(`Estive em ${cidade} e lembre de você`);
}
```

6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

```ruby
Copiar
Editar
function somarNumeros(){
    alert("Digite dois números inteiros");
    numero1 = parseInt(prompt("Número 1"));
    numero2 = parseInt(prompt("Número 2"));
    soma = numero1 + numero2;
    alert(soma);
}
```
