//card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

// suffling the array randomizely
cardArray.sort(() => 0.5 - Math.random());

const mainGrid = document.querySelector("#grid");
const resultDisplay = document.getElementById('result')
let cardsChosen = []; // to store the name of the clicked card
let cardsChosenIds = []; // to store the Id's of the clicked card
const cardsWon = [];

// first funct which gonna create the layout for the game
function startGame() {
  cardArray.forEach((card, index) => {
    // creating a new <img> element
    img = document.createElement("img");
    img.setAttribute("src", "./images/blank.png");
    img.setAttribute("data-id", index);
    img.addEventListener("click", flipCard);
    mainGrid.appendChild(img); // append img element we create to our main grid div
  });
}
startGame();

// Callback funct for 'click' eventListener
function flipCard() {
  const imgId = this.getAttribute("data-id"); // 'this' keyword what is allowing us to interact with element we clicked

  // pushing the clicked cards name
  cardsChosen.push(cardArray[imgId].name);
  // pushing the clicked cards name
  cardsChosenIds.push(imgId);

  // set the src of the clicked card to the specified img for that particular inside the cardArray
  this.setAttribute("src", cardArray[imgId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const imgs = document.querySelectorAll("#grid img");

  if (cardsChosenIds[0] == cardsChosenIds[1]) {
    alert("You have clicked the same image");

    imgs[cardsChosenIds[0]].setAttribute("src", "./images/blank.png");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("Yay!!!You found a match🥂");

    imgs[cardsChosenIds[0]].setAttribute("src", "./images/white.png");
    imgs[cardsChosenIds[1]].setAttribute("src", "./images/white.png");

    imgs[cardsChosenIds[0]].removeEventListener("click", flipCard);
    imgs[cardsChosenIds[1]].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    imgs[cardsChosenIds[0]].setAttribute("src", "./images/blank.png");
    imgs[cardsChosenIds[1]].setAttribute("src", "./images/blank.png");

    alert("Sorry, try again");
  }

  resultDisplay.textContent = cardsWon.length

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'Wohoooo!!! You selected them all correctly 😍'
    
  }
}
