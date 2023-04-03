// Desafio 02) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. //
function fibonacciNumber(N) {
  let a = 0
  let b = 1

  while( b < N ) {
    const sum = a + b
    a = b
    b = sum
  }
  if( b === N ) return "É Fibonacci!!!!!!!!!!!!!!!!!!!!!!!!"
  return "Não é Fibonacci :'("
};

// Desafio 03
var requireDados = require('./dados/dados.json');

const newRequireDados = requireDados.filter((i) => i.valor > 0 )

var min = Math.min(...newRequireDados.map(item => item.valor));
var max = Math.max(...newRequireDados.map(item => item.valor));

const average = newRequireDados.reduce((a, cV) => a + cV.valor, 0 ) / newRequireDados.length;

console.log("Menor valor: " + min);
console.log("Maior valor: " + max);
console.log("Dias do mês superior a media mensal: " + newRequireDados.filter((i) => i.valor > average).length  );


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por state:

const invoicingPerState = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

const totalInvoicing = Object.values(invoicingPerState).reduce((acc, curr) => acc + curr, 0);

function formatNumber(number, decimalPlaces) {
  return Number(number.toFixed(decimalPlaces));
}

const percentagePerStage = Object.keys(invoicingPerState).reduce((acc, state) => {
  acc[state] = formatNumber((invoicingPerState[state] / totalInvoicing) * 100, 2);
  return acc;
}, {});

console.log(percentagePerStage);


// 5) Escreva um programa que inverta os caracteres de um string.

let string = "Serei parte da Target Sistemas";

let arrayString = string.split("");

let stringInvertida = "";
for (let i = arrayString.length - 1; i >= 0; i--) {
  stringInvertida += arrayString[i];
}

console.log(stringInvertida);
