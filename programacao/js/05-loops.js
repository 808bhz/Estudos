'use strict';

/* Estruturas de Repetição
(também conhecidas como laços de repetição
ou loops) 

Loops clássicos/tradicionais:

while (ENQUANTO)
do/while (FAÇA/ENQUANTO)
for (PARA) 

Obs.: a maioria dos loops precisam de um controle
de repetição. */


// Exemplo 1: loop while
/* let contador = 100;
while( contador <= 10 ){
    console.log(`Valor de contador é: ${contador}`);
    contador++;
    // contador += 1;
    // contador = contador + 1;
} */

// if(contador > 3) {
//     console.log('fim do while');
// }


// Exemplo 2: do/while
/* i, j, k
Nomes de variáveis comuns para controle de loops */
/* let i = 1;
do {
    console.log(`i vale: ${i}`);
    i++;
} while( i <= 5 ); */


// Exemplo 3: for
/* for( let i = 1; i <= 5; i++ ){
    console.log(`i: ${i}`);
} */

// Exemplo 4: loops com arrays
let vocalistas = [
    "Dio", "Coverdale", "Bruce", "Jorn", "Floor"
];

for( let i = 0; i < vocalistas.length; i++ ){
    console.log(vocalistas[i]);
}

// Exemplo 5: for/of (exclusivo para arrays)
// Utiliza uma variável de acesso
console.log('--- Usando FOR/OF ---');
for( let vocalista of vocalistas ){
    console.log(vocalista);
}

let bandas = [
    ["Rush", "Genesis", "Yes"],
    ["Sepultura", "Krisium", "Shaman"]
];

for(let linha of bandas){
    console.log(linha);
    for(let coluna of linha){
        console.log(coluna);
    }
}


// Exemplo 6: loop com objeto
console.log("--- FOR/IN ---");

let pessoa = {
    nome : "Tiago",
    idade : 38,
    cidade : "São Paulo"
};

for(let dados in pessoa){
    // traz apenas nome da prop.
    /* console.log(dados); 

    // traz os dados
    console.log(pessoa[dados]);  */

    console.log(`${dados} - ${pessoa[dados]}`);
}
















