console.log("Hello, want to play a game?!");

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "Paper";
  } else if (choice === 2) {
    return "Rock";
  } else {
    return "Scissors";
  }
};

let getHumanChoice = () => {
  let choice = prompt("Please select paper, rock, or scissors.");

  choice = choice.toLowerCase();

  if (choice === "paper") {
    return "Paper";
  } else if (choice === "rock") {
    return "Rock";
  } else if (choice === "scissors") {
    return "Scissors";
  } else {
    return "Invalid entry! Try again.";
  }
};

let playRound = () => {
  let humanChoice = getHumanChoice();
  console.log(humanChoice);

  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  if (computerChoice === "Rock" && humanChoice === "Scissors") {
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice === humanChoice) {
    return "You tied!";
  } else {
    return "Yay! you win!";
  }
};

let getResults = (result1, result2, result3, result4, result5) => {
  let countComputerWins = 0;
  let countHumanWins = 0;
  let countTieWins = 0;

  if (result1 === "Yay! you win!") {
    countHumanWins += 1;
  } else if (result1 === "You tied!") {
    countTieWins += 1;
  } else countComputerWins += 1;
  if (result2 === "Yay! you win!") {
    countHumanWins += 1;
  } else if (result2 === "You tied!") {
    countTieWins += 1;
  } else countComputerWins += 1;
  if (result3 === "Yay! you win!") {
    countHumanWins += 1;
  } else if (result3 === "You tied!") {
    countTieWins += 1;
  } else countComputerWins += 1;
  if (result4 === "Yay! you win!") {
    countHumanWins += 1;
  } else if (result4 === "You tied!") {
    countTieWins += 1;
  } else countComputerWins += 1;
  if (result5 === "Yay! you win!") {
    countHumanWins += 1;
  } else if (result5 === "You tied!") {
    countTieWins += 1;
  } else countComputerWins += 1;

  console.log(
    "countComputerWins",
    countComputerWins,
    "countHumanWins",
    countHumanWins,
    "countTieWins",
    countTieWins
  );
};

let round = 0;

let playGame = () => {
  let results1 = playRound();
  console.log(results1);
  let results2 = playRound();
  console.log(results2);
  let results3 = playRound();
  console.log(results3);
  let results4 = playRound();
  console.log(results4);
  let results5 = playRound();
  console.log(results5);
  getResults(results1, results2, results3, results4, results5);
};

console.log(playGame());
