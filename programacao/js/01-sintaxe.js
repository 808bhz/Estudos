/* Habilitando o modo estrito da linguagem */
'use strict';

/* SHIFT ALT A
COMENTÁRIO DE MÚLTIPLAS LINHAS */

// Comando de saída de dados (muito usado para testes)
console.log("Olá JavaScript!");

// Método de teste (bloqueia a página)
// alert("Olá JavaScript via alert");

// Método antigo de teste
// document.write("Olá JavaScript de novo!");
/* Variáveis e Constantes 
var -> variável com escopo global (aberto/geral)
let -> variável com escopo global e bloco
const -> constante com escopo global e bloco */

/* Declarando constantes e variáveis */
const nome = "Tiago";
let ano = 2022;

console.log(nome);
console.log(ano);
console.log(nome, ano);

// typeof consegue detectar o tipo de dado do recurso
console.log(typeof nome);
console.log(typeof ano);


let preco = 1597.55;
let produto = "notebook";
let quantidade = 3;
let total = quantidade * preco;
let loja = "submarino"
console.log(typeof preco);

console.log ("produto, loja");
console.log ("total");
/*  o produto notebook custa 1597.55
e esta a venda no submarino */
/*  CONCATENAÇAO  (TRADICIONAL)*/
console.log("concatenaçao")
console.log("O produto " + produto + " custa " + preco + " e esta avenda na " + loja );

/*  TEMPLATE LITERAL/STRING 
nesta forma usamos crases(` `) em vez de aspas (" ") */
console.log(`o produto ${produto} custa ${preco} e esta a venda na ${loja}`);
