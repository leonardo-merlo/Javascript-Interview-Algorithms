// Dado um array de cartas de blackjack, retorne a carta mais alta, se a soma das cartas é abaixo, acima ou igual a 21 e a soma total. As cartas podem ser números de 2 a 10, ou "jack", "queen", "king" e "ace". O "jack", "queen" e "king" valem 10 pontos, enquanto o "ace" pode valer 1 ou 11 pontos, dependendo do que for mais vantajoso para o jogador. Se a soma das cartas for maior que 21, o resultado deve ser "above". Se for igual a 21, o resultado deve ser "blackjack". Se for menor que 21, o resultado deve ser "below". O resultado final deve ser uma string no formato "{maiorCarta} {resultado} {somaTotal}".

function blackjack(arr) {
  const values = {
    jack: 10,
    queen: 10,
    king: 10,
    ace: 11,
  };

  let cards = arr.map((c) => values[c] ?? Number(c));

  let sum = cards.reduce((a, b) => a + b, 0);

  let aces = cards.filter((c) => c === 11).length;

  while (sum > 21 && aces > 0) {
    sum -= 10;
    aces--;
  }

  let result = sum > 21 ? "above" : sum === 21 ? "blackjack" : "below";

  let maiorCarta = arr
    .map((c) => values[c] ?? Number(c))
    .sort((a, b) => b - a)[0];

  return `${maiorCarta} ${result} ${sum}`;
}

console.log(blackjack(["ace", 10, "ace"])); //ace blackjack 21
console.log(blackjack([2, 3, 4])); //4 below 9
console.log(blackjack(["jack", "king", 2])); //king above 22
