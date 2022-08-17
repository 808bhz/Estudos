'use strict';

/* Funções:
Blocos de código com os seguintes objetivos:

- Organização de lógicas, separação de responsabilidades no programa 
- Reaproveitamento de código */

/* Sintaxe 1 (tradicional) 
Função anônima/literal */
let exemplo1 = function(){
    console.log("Função anônima");
};

/* Sintaxe 2 (tradicional) 
Função nomeada/declarada */
function exemplo2(){
    console.log("Função nomeada");
}

/* Sintaxe 3 (moderna) 
Arrow Function (Função Seta) */
let exemplo3 = () => {
    console.log("Arrow Function");
}

/* Chamadas de função */
exemplo1();
exemplo2();
exemplo3();


/* Função com parâmetros */
function soma( valor1, valor2 ){
    return valor1 + valor2;
}

console.log( soma(10, 5)  );
console.log( soma(450, 1000)  );
console.log( soma(7, 12.5)  );
console.log( soma(254, 278.9)  );

let teste1 = 1000;
let teste2 = 2000;

console.log( soma(teste1, teste2) );

// Capturando/Armazenando o retorno da função
let resultado = soma(teste1, teste2);
if(resultado > 1500){
    console.log('Meta alcançada!');
} 


let preco = 1000;
let desconto = preco * 0.1; // 10% do preço
let valorFinal = preco - desconto;

function trataMoeda(valor){
    return valor.toLocaleString("pt-br", {
        style: 'currency',
        currency: 'BRL'
    });
}

console.log(`Preço original: ${trataMoeda(preco)}`);
console.log(`Desconto: ${trataMoeda(desconto)}`);
console.log(
    `Valor com desconto: ${trataMoeda(valorFinal)}`);


console.log("------");

// Versão 1: sintaxe tradicional
/* function dobra(numero){
    return numero * 2;
} */

// Versão 2: arrow function com retorno explícito
/* let dobra = (numero) => {
    return numero * 2;
} */

// Versão 3: arrow function com retorno implícito
let dobra = numero => numero * 2;

console.log( dobra(10) ); 

/* Funções como métodos de objeto */
console.log("----");
let pessoa = {
    // propriedades
    nome : "Tiago",
    idade : 18,

    // método/função
    verificaIdade : function(){
        if(this.idade >= 18){
            return "maior";
        } else {
            return "menor";
        }
    }
}
console.log(pessoa.nome, pessoa.idade);
console.log( pessoa.verificaIdade() );


/* Funções temporizadoras
-setInterval():
Executa uma ação de tempos em tempos

setTimeout():
Executa uma ação após um determinado tempo */

let i = 1;
setInterval(function (){
    console.log(`Front-End na Impacta! - ${i}`);
    i++;
}, 1000);

setTimeout(function(){
    console.log("Olá!");
}, 5000);
