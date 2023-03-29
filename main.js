// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnPlay = document.querySelector("#cookie");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Evento
btnPlay.addEventListener("click", handleLuckyClick);
btnReset.addEventListener("click", handleResetClick);

//Funções
function handleLuckyClick(event) {
  event.preventDefault();

  switch (randomNumber) {
    case 1:
      document.querySelector(
        ".lucky"
      ).innerText = `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`;
      toggleScreen();
      break;
    case 2:
      document.querySelector(
        ".lucky"
      ).innerText = `Defeitos e virtudes são apenas dois lados da mesma moeda.`;
      toggleScreen();
      break;
    case 3:
      document.querySelector(
        ".lucky"
      ).innerText = `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`;
      toggleScreen();
      break;
    case 4:
      document.querySelector(
        ".lucky"
      ).innerText = `Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.`;
      toggleScreen();
      break;
    case 5:
      document.querySelector(
        ".lucky"
      ).innerText = `Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.`;
      toggleScreen();
      break;
    case 6:
      document.querySelector(
        ".lucky"
      ).innerText = `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.`;
      toggleScreen();
      break;
    case 7:
      document.querySelector(
        ".lucky"
      ).innerText = `Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.`;
      toggleScreen();
      break;
    case 8:
      document.querySelector(
        ".lucky"
      ).innerText = `A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.`;
      toggleScreen();
      break;
    case 9:
      document.querySelector(
        ".lucky"
      ).innerText = `A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.`;
      toggleScreen();
      break;
    default:
      toggleScreen();
  }
}

function handleResetClick() {
  toggleScreen();

  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
