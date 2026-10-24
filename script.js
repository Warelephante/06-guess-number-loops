document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  const message = document.getElementById('message');

  // Give the player up to five attempts
  for (let attempts = 1; attempts <= 5; attempts++) {
    const guess = Number(prompt('Guess a number between 1 and 10:'));

    if (guess === secretNumber) {
      message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      break;
    } else if (guess > secretNumber) {
      message.textContent = 'Too high! Try again.';
    } else if (guess < secretNumber) {
      message.textContent = 'Too low! Try again.';
    }

    if (attempts === 5) {
      message.textContent = `❌ Game over! The number was ${secretNumber}.`;
    }
  }
});