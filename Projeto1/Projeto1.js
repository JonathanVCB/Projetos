/*
Depois de um longo dia de estudos e trabalhos, Jonathan foi para sua cama para então dormir,e assim, seguir para mais 1 dia com suas rotinas.
Porem ao acordar, Jonathan percebe que o mundo esta de cabeça para baixo por conta de um VIRUS ZUMBI, que esta contaminando o mundo inteiro. Quando ele se da conta
seu vizinho ja esta o atacando com muita vontade de morder ele, mas, Jonathan conseguiu escapar dessa vez e derrotou seu vizinho zumbi. De imediato, Jonathan pega seu celular
e liga para sua namorada, muito preocupado e com medo de algo ter acontecido com ela, e, para sua alegria, sua namorada atende e conta que esta muito assustada e escondida em
sua casa, e que precisa de ajuda urgente para sair de la, e o caminho esta repleto de desafios.
*/
const prompt = require("prompt-sync")();

function syncDelay(milliseconds) {
  var start = new Date().getTime();
  var end = 0;
  while (end - start < milliseconds) {
    end = new Date().getTime();
  }
}

console.log(
  "Depois de um longo dia de estudos e trabalhos, Jonathan foi para sua cama para então dormir,e assim, seguir para mais 1 dia com suas rotinas."
);
syncDelay(3000);
console.log(
  "Porem ao acordar, Jonathan percebe que o mundo esta de cabeça para baixo por conta de um VIRUS ZUMBI, que esta contaminando o mundo inteiro. Quando ele se da conta"
);
syncDelay(3000);
console.log(
  "seu vizinho ja esta o atacando com muita vontade de morder ele, mas, Jonathan conseguiu escapar dessa vez e derrotou seu vizinho zumbi. De imediato, Jonathan pega seu celular"
);
syncDelay(3000);
console.log(
  "e liga para sua namorada, muito preocupado e com medo de algo ter acontecido com ela, e, para sua alegria, sua namorada atende e conta que esta muito assustada e escondida em"
);
syncDelay(3000);
console.log(
  "sua casa, e que precisa de ajuda urgente para sair de la, e o caminho esta repleto de desafios."
);
syncDelay(3000);

let resposta = 0;

do {
  var pergunta1 = prompt(
    "Jonathan decide ir de moto, ele fez uma boa escolha? "
  );
  var plower = pergunta1.toLowerCase();
  var pfinal = plower.replace("ã", "a");
  if (pfinal !== "sim" && pfinal !== "nao") {
    console.log("Resposta Invalida");
  }
} while (pfinal !== "sim" && pfinal !== "nao");
if (pfinal == "sim") {
  resposta++;
}
syncDelay(600);

do {
  var pergunta2 = prompt(
    "Havia um bando atras de Jonathan, eles conseguiu ser mais rapido? "
  );
  var plower2 = pergunta2.toLowerCase();
  var pfinal2 = plower2.replace("ã", "a");
  if (pfinal2 !== "sim" && pfinal2 !== "nao") {
    console.log("Resposta Invalida");
  }
} while (pfinal2 !== "sim" && pfinal2 !== "nao");
if (pfinal2 == "sim") {
  resposta++;
}
syncDelay(600);

do {
  var pergunta3 = prompt(
    "Jonathan fez seu trajeto na rodovia a 205km/h, ele conseguiu sobreviver? "
  );
  var plower3 = pergunta3.toLowerCase();
  var pfinal3 = plower3.replace("ã", "a");
  if (pfinal3 !== "sim" && pfinal3 !== "nao") {
    console.log("Resposta Invalida");
  }
} while (pfinal3 !== "sim" && pfinal3 !== "nao");
if (pfinal3 == "sim") {
  resposta++;
}
syncDelay(600);

do {
  var pergunta4 = prompt(
    "A gasolina acabou e Jonathan teve que seguir a pé, ele conseguiu concluir o trajeto? "
  );
  var plower4 = pergunta4.toLowerCase();
  var pfinal4 = plower4.replace("ã", "a");
  if (pfinal4 !== "sim" && pfinal4 !== "nao") {
    console.log("Resposta Invalida");
  }
} while (pfinal4 !== "sim" && pfinal4 !== "nao");
if (pfinal4 == "sim") {
  resposta++;
}
syncDelay(600);

do {
  var pergunta5 = prompt(
    "Jonathan enfrenta luta com 5 zumbis na porta da casa de sua namorada, ele derrotou os zumbis? "
  );

  var plower5 = pergunta5.toLowerCase();
  var pfinal5 = plower5.replace("ã", "a");
  if (pfinal5 !== "sim" && pfinal5 !== "nao") {
    console.log("Resposta Invalida");
  }
} while (pfinal5 !== "sim" && pfinal5 !== "nao");
if (pfinal5 == "sim") {
  resposta++;
}
syncDelay(600);

console.log(
  "--------------------------------------------------------------------------"
);

if (resposta == 0) {
  console.log(
    "Jonathan foi emboscado subindo na moto pela esposa do vizinho e morreu"
  );
} else if (resposta == 1 || resposta == 2) {
  console.log("Jonathan fracassou antes mesmo de chegar na rodovia");
} else if (resposta == 3) {
  console.log(
    "Jonathan chegou muito perto de conseguir, mas foi morto pelos zumbis"
  );
} else if (resposta == 4) {
  console.log(
    "Jonathan conseguiu ver sua namorada, porem foi mordido e nao lhe resta muito tempo"
  );
} else if (resposta == 5) {
  console.log(
    "Jonathan conseguiu superar todos os desafios ao longo de sua jornada, e esta com sua namorada"
  );
}
