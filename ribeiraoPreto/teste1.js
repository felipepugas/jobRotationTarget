/* 1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? */

let i = 13
let SOMA = 0
let K = 0

while( K < i ) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

// Resposta 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

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

  console.log(fibonacciNumber());

/* 3) Descubra a lógica e complete o próximo elemento:
  a) 9
  b) 128
  c) 49
  d) 64
  e) 13
  f)20
*/

/* 4) Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

CALCULO:

Vr = Vcarro + Vcaminhão
Vr = 110 km/h + 80 km/h
Vr = 190 km/h

deltat = deltaS/Vr
deltat = 100 km / 190 km/h
deltat = 0,5263 h (ou 31,58 minutos)

dcarro = 110 km/h * 0,5263 h
dcarro = 57,89 km

dcaminhão = 80 km/h * 0,5263 h
dcaminhão = 42,11 km

RESPOSTA: CARRO

*/

// 5) Escreva um programa que inverta os caracteres de um string.

let string = "Serei parte da Target Sistemas";

let arrayString = string.split("");

let stringInvertida = "";
for (let i = arrayString.length - 1; i >= 0; i--) {
  stringInvertida += arrayString[i];
}

console.log(stringInvertida);
