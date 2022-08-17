'use strict';

/* Métodos/Funções de seleção no DOM
-getElementById() 
Seleciona UM elemento pelo ID 

-querySelector()
Seleciona UM elemento pelo tipo de seletor

-querySelectorAll()
Seleciona VÁRIOS elementos pelo tipo de seletor 

Obs.: querySelector e querySelectorAll utilizam
a sintaxe de seletores do CSS (id, classe, descendente 
etc) */


// Exemplos de acesso ao DOM
// const exemploTitulo = document.getElementById("titulo");
const exemploTitulo = document.querySelector("h1");
console.log(exemploTitulo);

const subtitulos = document.querySelectorAll("h3");
console.log(subtitulos);

console.log(subtitulos[0]);

// Modificando elementos
exemploTitulo.textContent = "Olá JavaScript!";
subtitulos[0].innerHTML = "<i>Exemplo 1: eventos!</i>";
exemploTitulo.style.color = "red";

const elementos = document.querySelectorAll("b, span");
console.log(elementos);

// elementos.classList.add("destaque"); // erro
for(let elemento of elementos){
    elemento.classList.add("destaque");
}


/* Manipulando Eventos 
Usando monitor/ouvinte de evento */
const pagina = document.querySelector("body");
const msg = document.querySelector("#mensagem");
const subExemplo1 = document.querySelector("#subtitulo-exemplo01");

subExemplo1.addEventListener("click", function(){
    msg.textContent = "Exemplo 1 ativado! :)";
    pagina.style.fontFamily = "Verdana";
    pagina.style.backgroundColor = "lightblue";
});

/* subExemplo1.addEventListener("mouseout", function(){
    console.log("ok!");
    msg.textContent = "";
    pagina.style.fontFamily = "Georgia";
    pagina.style.backgroundColor = "white";
}); */

/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
botao.addEventListener("click", function(){
    pagina.style.transition = "2s";
    pagina.classList.toggle("modo-noturno");

    /* Exercício: programe uma condicional
    que permita mudar o texto do botão.
    Se o modo noturno estiver ativado, então
    mostrar "Desativar". Senão, mostrar "Ativar." */

    // if(pagina.classList.contains("modo-noturno")){
    if(pagina.className == "modo-noturno"){
        botao.textContent = "Desativar";
    } else {
        botao.textContent = "Ativar";
    }
});



/* Exemplo 3: simulação de cadastro
Evento de formulário, captura de dados dos campos,
cálculo de valores, tratamento dos valores,
verificação aprovação/reprovação, criar elementos
dinamicamente */

// Selecionando os elementos que serão trabalhados
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

// Programando o evento de acionamento do formulário
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão
    de redirecionamento (acontece com formulário e links) */
    event.preventDefault();
    
    // Capturando os dados digitados nos campos
    // Obs.: usamos parseFloat para garantir que são números
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // Calculando a média das notas
    let media = (nota1 + nota2) / 2;

    // Verificando situação do aluno
    let situacao;
    if( media >= 7 ){
        situacao = "aprovado";
    } else {
        situacao = "reprovado";
    }

    /* Levando os dados dinâmicos para a página */

    // 1) Criar um elemento dinamicamente
    let paragrafo = document.createElement("p");

    // 2) Montar o conteúdo do novo elemento
    paragrafo.textContent = `${nome} - ${media.toFixed(2)} - ${situacao}`;

    // 3) Colocar este novo elemento/conteúdo na div
    divResultados.appendChild(paragrafo);

    // Reset do formulário
    formulario.reset();

    // Devolvendo o foco para o campo nome
    campoNome.focus();
});