'use strict';

/* Estruturas de Controle Condicional
if/else/else if
switch/case/default */

let aluno = "Jon Oliva";
let nota1 = 8;
let nota2 = 0;
let media = (nota1 + nota2) / 2;
console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);

/* Algoritmo: se a média for maior ou igual a 7,
então o aluno estará aprovado. Senão, reprovado. */
/* if( media >= 7 ){
    console.log("Está aprovado!😁");
} else {
    console.log("Está reprovado!🙁");
} */

let faltas = 5; // limite é 10
console.log(`Faltas: ${faltas}`);
if (media >= 7 && faltas < 10) {
    console.log("aprovado!");
} else {
    console.log("reprovado!");
}

console.log("---------");

/* Algoritmo do desempenho:
Média menor que 3? PÉSSIMO 
Média menor que 5? RUIM 
Média menor que 7? REGULAR
Média menor que 9? BOM
Nenhuma das anteriores? ÓTIMO */

// Condicional ENCADEADA
let desempenho; // undefined (indefinida, sem valor)
if(media < 3){
    desempenho = "péssimo";
} else if(media < 5){
    desempenho = "ruim";
} else if(media < 7){
    desempenho = "regular";
} else if(media < 9){
    desempenho = "bom";
} else {
    desempenho = "ótimo";
}
console.log(desempenho);

console.log("-------");

/* SHORTHAND IF/ELSE (RESUMIDO/ABREVIADO)
usando o operador ternário ?: */
let idade = 2;
let resultado;
/* if(idade >= 18){
    resultado = "maior";
} else {
    resultado = "menor";
} */

resultado = idade >= 18 ? "maior" : "menor";
console.log(resultado);







