const emojis = ["😀","😎","😍","🤖","🐱","🐶","🍕","⚽"];
let cards = [...emojis, ...emojis];
cards.sort(() => 0.5 - Math.random());

const game = document.getElementById("game");
let firstCard, secondCard;
let lock = false;

cards.forEach(emoji => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.textContent = "";
  card.addEventListener("click", flipCard);
  game.appendChild(card);
});

function flipCard() {
  if (lock || this === firstCard) return;
  this.textContent = this.dataset.emoji;

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }
}

function checkMatch() {
  lock = true;
  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    resetFlip(true);
  } else {
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      resetFlip(false);
    }, 1000);
  }
}

function resetFlip(match) {
  firstCard = null;
  secondCard = null;
  lock = false;
}
