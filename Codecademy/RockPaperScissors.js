// Function to get the user's choice
const getUserChoice = (userInput) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Error Message";
  }
};

// Function to generate the computer's choice
const getComputerChoice = () => {
  const computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// Function to determine the winner
const determineWinner = (userInput, computerInput) => {
  if (userInput === computerInput) {
    return "Draw";
  }
  if (computerInput === "paper") {
    if (userInput === "scissors") {
      return "User Win";
    } else {
      return "Computer Win";
    }
  }
  if (computerInput === "scissors") {
    if (userInput === "rock") {
      return "User Win";
    } else {
      return "Computer Win";
    }
  }
  if (computerInput === "rock") {
    if (userInput === "scissors") {
      return "User Win";
    } else {
      return "Computer Win";
    }
  }
};

// Function to play the game
const playGame = () => {
  const userInput = getUserChoice("rock");
  const computerInput = getComputerChoice();

  console.log("You Choose: " + userInput);
  console.log("Computer Choose: " + computerInput);
  console.log("The winner is " + determineWinner(userInput, computerInput));
};

// Start the game
playGame();
