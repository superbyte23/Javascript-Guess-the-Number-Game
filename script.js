function startGame() {
  const numberToGuess = Math.ceil(Math.random() * 100);
  let numberGuess = 0;
  let counter = 0;

  do {
    if (counter >= 10) {
      alert(`Maximum guess limit reached! Correct Number is ${numberToGuess} Game Over!`);
      break;
    }
    counter++;
    numberGuess = parseInt(
      prompt(`Guess ${counter} : Enter a number from 1-100`)
    );
    if (numberGuess > numberToGuess) {
      alert("Your number is greater than the guess number. Try again!");
    } else if (numberGuess < numberToGuess) {
      alert("Your number is lesser than the guess number. Try again!");
    } else if (numberGuess == numberToGuess) {
      alert(
        `Congratulations! Your guess number ${numberGuess} is correct. Game Over!`
      );
      break;
    } else {
      alert(
        "Invalid Input! Please enter numeric value from 1-100 only. Try Again"
      );
    }
  } while (numberGuess != numberToGuess);
}
