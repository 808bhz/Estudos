'use strict';

/* Objeto: estrutura de dados baseado
em pares de chave e valor 
(propriedades ou atributos).
Os dados não são indexados. */

// Exemplo 1: objeto simples
let livro = {
    titulo : "Senhor dos Anéis",
    ano : 1954,
    autor : "J.R.R. Tolkien",
    volumes: 3
};

console.log(livro);
console.log(livro.titulo);
console.log(livro.autor);

console.log(
`O ${livro.titulo} tem ${livro.volumes} volumes`);

// Exemplo 2: objeto contendo array e outro objeto
let pessoa = {
    nome : "Tiago",
    idade : 38,
    telefones : ["11-2222-3333", "11-95555-6666"],
    /* Faça aqui mesmo, uma nova propriedade
    com as medidas desta pessoa (altura e peso) */
    medidas : {
        altura : 1.80,
        peso : 80
    }
};

console.log( pessoa.nome );
console.log(`Idade: ${pessoa.idade} anos`);
console.log(`Fixo: ${pessoa.telefones[0]}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso} kg`);
console.log(`Altura: ${pessoa.medidas.altura}`);

/* Usando a função toFixed() para indicar
quantidade de casas decimais */
console.log(
    `Altura: ${ (pessoa.medidas.altura).toFixed(2) }`
);

// Exemplo 3: Array de Objetos
let livros = [
    {
        titulo : "Ghost Rider",
        autor : "Neil Peart"
    },
    {
        titulo : "Game Of Thrones",
        autor : "George R.R. Martin"
    },
    {
        titulo : "Inside Out",
        autor : "Nick Mason"
    }
];

console.log(`Título: ${livros[2].titulo}`);
console.log(`Autor: ${livros[2].autor}`);

/* Exercícios
1) Crie um objeto chamado "pedido" contendo
as seguintes informações:
-Código (combinação de letras e números)
-Lista de produtos (pelo menos 3)
-Data do pedido (foi feito hoje) *
-Valor **
-Prazo de entrega

*desafio: carregue a data atual via programação */

// Versão 1 (sem desafios)
/* let pedido = {
    codigo : "123abc",
    produtos : ["TV", "Playstation", "God Of War"],
    data : "05/08/2022",
    valor : 5000.88,
    prazo : 7 
}; */

/* 2) Mostre no console uma frase contendo algumas
das informações do pedido. Exemplo:
Referente ao pedido 123XYZ, os produtos selecionados foram comprados em 05/08/2022, custando R$ 5.750,88**. O prazo de entrega é de 7 dias úteis. 

**desafio: faça aparecer o valor do pedido em R$ */
console.log('-----');

// Versão 1 (sem desafios)
/* console.log(`Referente ao pedido ${pedido.codigo}, os produtos selecionados foram comprados em ${pedido.data}, custando R$ ${pedido.valor}. O prazo de entrega é de ${pedido.prazo} dias úteis.`); */




// Versão 2 (com desafios)
let data = new Date;
console.log( data.getDate() );
console.log( data.getMonth() );
console.log( data.toLocaleDateString() );

let exemploPreco = 1575.83; // R$ 1.575,83
console.log(exemploPreco);
console.log(
    exemploPreco.toLocaleString('pt-br', {
        style : 'currency',
        currency : 'BRL'
    })
);


const opcoes = {
    style : 'currency',
    currency : 'BRL'
};

let pedido = {
    codigo : "123abc",
    produtos : ["TV", "Playstation", "God Of War"],
    data : (new Date).toLocaleDateString(),
    valor : (5000.88).toLocaleString('pt-br', opcoes),
    prazo : 7 
};

console.log(`Referente ao pedido ${pedido.codigo}, os produtos selecionados foram comprados em ${pedido.data}, custando R$ ${pedido.valor}. O prazo de entrega é de ${pedido.prazo} dias úteis.`);

const dias = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
];

// let data = new Date;
console.log( dias[data.getDay()] );


























































