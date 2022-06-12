//card options
const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

// suffling the array randomizely
cardArray.sort(() => 0.5 - Math.random())

const mainGrid = document.querySelector('#grid')

// first funct which gonna create the layout for the game
function startGame() {
    cardArray.forEach((card, index) => {
        // creating a new <img> element
        img = document.createElement('img')
        img.setAttribute('src', './images/blank.png')
        img.setAttribute('data-id', index)
        img.addEventListener('click', flipCard)
        mainGrid.appendChild(img) // append img element we create to our main grid div
    }) 
}
startGame()

// Callback funct for 'click' eventListener
function flipCard() {
    const imgId = this.getAttribute('data-id') // 'this' keyword what is allowing us to interact with element we clicked
    console.log(cardArray[imgId].name);
}  