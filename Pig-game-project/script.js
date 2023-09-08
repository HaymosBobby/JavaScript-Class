let totalScoreOne = document.getElementById('score--0');
let totalScoreTwo = document.getElementById('score--1');
let currentOne = document.getElementById('current--0');
let currentTwo = document.getElementById('current--1');
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');

let winningCell = document.querySelector('.winner');

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

let dice = document.querySelector('.dice');

// Create global variables
let currentScore, score, activePlayer, playing;

// console.log(score[activePlayer]);

// function initialize () {

// }

const initialize = () => {
  currentScore = 0;
  // let score = [45,90];
  score = [0, 0];
  activePlayer = 0;
  playing = true;

  totalScoreOne.innerText = 0;
  totalScoreTwo.innerText = 0;
  currentOne.innerText = 0;
  currentTwo.innerText = 0;

  dice.style.display = 'none';
  winningCell.style.display = 'none';

  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerOne.classList.remove('player--active');
};

initialize();

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  // currentOne.innerText = currentScore;

  playerTwo.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Created a random number for the dice roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    // console.log(diceRoll);

    // 2. Display the dice.
    // dice.src = 'dice-' + diceRoll + '.png';
    dice.src = `dice-${diceRoll}.png`;
    dice.style.display = 'block';

    // 3. Check for a 1

    if (diceRoll !== 1) {
      // --Adding scores
      // currentScore = currentScore + diceRoll;
      currentScore += diceRoll;

      // currentOne.innerText = currentScore;

      // document.getElementById("current--" + activePlayer).innerText = currentScore;
      document.getElementById(`current--${activePlayer}`).innerText =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // score[activePlayer] = score[activePlayer] + currentScore
    // totalScoreOne.innerText = score[activePlayer];
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).innerText =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      // console.log(`player-${activePlayer + 1} is the winner.`);
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      winningCell.innerHTML = ` Congratulations Player-${
        activePlayer + 1
      }, you are the winner`;
      winningCell.style.display = 'block';
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initialize);
