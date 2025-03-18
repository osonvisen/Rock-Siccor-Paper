const hands = document.querySelectorAll(".hands");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissor");
let resultUsr = document.querySelector(".result-user");
let resultComputer = document.querySelector(".result-computer");
let results = document.querySelector(".results");
let computerPick;
let message;
let wins = 0;
let losses = 0;
let ties = 0;
let counters = document.querySelector(".counters");
// Vi velger først!
hands.forEach((hand) => {
  hand.addEventListener("click", handleClick);
});
function handleClick(event) {
  const ourPick = event.currentTarget.classList[1];
  userPick(ourPick);
}
function userPick(hand) {
  resultUsr.innerHTML = "";
  resultComputer.innerHTML = "";
  let userMsg = document.createElement("p");
  userMsg.textContent = `Du valgte: ${hand}`;
  let userImg = document.createElement("img");
  userImg.style.width = "100px";
  userImg.src = `./assets/${hand}.png`;
  resultUsr.append(userMsg, userImg);
  computerTurn(hand);
}
function computerTurn(userPick) {
  let usrPick = userPick;
  const randomPick = Math.floor(Math.random() * 3) + 1;
  let compPickImg;
  if (randomPick === 1) {
    computerPick = "rock";
  } else if (randomPick === 2) {
    computerPick = "paper";
  } else if (randomPick === 3) {
    computerPick = "scissor";
  }
  message = document.createElement("p");
  message.textContent = "Computeren valgte: " + computerPick;
  const compChoiseImg = document.createElement("img");
  compChoiseImg.src = `./assets/${computerPick}.png`;
  compChoiseImg.style.width = "100px";
  resultComputer.append(message, compChoiseImg);
  whoWon(usrPick, computerPick);
}
function whoWon(user, computer) {
  results.innerHTML = "";
  const textTie = document.createElement("h1");
  const outComes = {
    rock: { rock: "tie", paper: "lose", scissor: "win" },
    paper: { rock: "win", paper: "tie", scissor: "lose" },
    scissor: { rock: "lose", paper: "win", scissor: "tie" },
  };
  const result = outComes[user][computer];
  if (result == "win") {
    textTie.textContent = "Du vant!";
    wins++;
  } else if (result == "lose") {
    textTie.textContent = "Du tapte!";
    losses++;
  } else {
    textTie.textContent = "Det ble uavgjort, gitt!";
    ties++;
  }
  results.appendChild(textTie);
  const textWins = document.createElement("p");
  textWins.textContent = `Seire: ${wins} - Tap: ${losses} - Uavgjort: ${ties}`;
  counters.innerHTML = "";
  counters.appendChild(textWins);
}
