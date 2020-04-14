document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'https://i.imgur.com/Vb8Da9J.png?1',
    },
    {
      name: 'fries',
      img: 'https://i.imgur.com/Vb8Da9J.png?1',
    },
    {
      name: 'cheeseburger',
      img: 'https://i.imgur.com/6xIG0rl.jpg?3',
    },
    {
      name: 'cheeseburger',
      img: 'https://i.imgur.com/6xIG0rl.jpg?3',
    },
    {
      name: 'hotdog',
      img: 'https://i.imgur.com/QCN8cip.png?1',
    },
    {
      name: 'hotdog',
      img: 'https://i.imgur.com/QCN8cip.png?1',
    },
    {
      name: 'icecream',
      img: 'https://i.imgur.com/8cIVaiU.png?1',
    },
    {
      name: 'icecream',
      img: 'https://i.imgur.com/8cIVaiU.png?1',
    },
    {
      name: 'milkshake',
      img: 'https://i.imgur.com/q8YXlHg.png?3',
    },
    {
      name: 'milkshake',
      img: 'https://i.imgur.com/q8YXlHg.png?3',
    },
    {
      name: 'pizza',
      img: 'https://i.imgur.com/6xIG0rl.jpg?4',
    },
    {
      name: 'pizza',
      img: 'https://i.imgur.com/6xIG0rl.jpg?4',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'https://i.imgur.com/FXy3wiX.png?2');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
      console.log('createBoard');
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute(
        'src',
        'https://i.imgur.com/ZGdAa0G.png?2'
      );
      cards[optionTwoId].setAttribute(
        'src',
        'https://i.imgur.com/ZGdAa0G.png?2'
      );
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute(
        'src',
        'https://i.imgur.com/FXy3wiX.png?2'
      );
      cards[optionTwoId].setAttribute(
        'src',
        'https://i.imgur.com/FXy3wiX.png?2'
      );
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
