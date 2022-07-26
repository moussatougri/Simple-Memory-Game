//Selectoren
const section = document.querySelector("section");
const playersLifeCount = document.querySelector(".player-lives-count");
let playersLife = 6;

//Memory Images
const memoryCard = () => [
  {
    imagesSrc: "images/outdoor-pool-gee9ffd8ee_1920.jpg",
    name: "outdoor pool",
  },
  {
    imagesSrc: "images/outdoor-pool-gee9ffd8ee_1920.jpg",
    name: "outdoor pool",
  },
  {
    imagesSrc: "images/mountains-gf5569e410_1920.jpg",
    name: "mountains",
  },
  {
    imagesSrc: "images/mountains-gf5569e410_1920.jpg",
    name: "mountains",
  },
  {
    imagesSrc: "images/milk-g1fbcead56_1920.jpg",
    name: "milk",
  },
  {
    imagesSrc: "images/milk-g1fbcead56_1920.jpg",
    name: "milk",
  },
  {
    imagesSrc: "images/lemons-g047aa695f_1920.png",
    name: "lemon",
  },
  {
    imagesSrc: "images/lemons-g047aa695f_1920.png",
    name: "lemon",
  },
];

//randomize
const randomMemoryCard = () => {
  const cardData = memoryCard();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Generator
const cardGenerator = () => {
  const cardData = randomMemoryCard();

  //render card
  cardData.forEach(function (img) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    const images = document.createElement("img");
    images.classList.add("item");

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    //add src
    images.src = img.imagesSrc;
    images.setAttribute("name", img.name);

    //appendChild items
    section.appendChild(gridContainer);
    gridContainer.appendChild(images);
    gridContainer.appendChild(gridItem);

    gridContainer.addEventListener("click", (e) => {
      gridContainer.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
cardGenerator();

//check cards
const checkCards = (e) => {
  const clickCard = e.target;
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  //check if you click 2 images
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      //check if you have a match
      flippedCards.forEach((card) => {
        console.log(card);
        card.classList.remove("flipped");
        card.parentElement.style.pointerEvents = "none";
      });
    } else {
      //check if you dont have a match
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        const parentElement = card.parentElement;
        setTimeout(() => parentElement.classList.remove("toggleCard"), 1000);
      });
      playersLife--;
      playersLifeCount.textContent = playersLife;
      //check if you lose this game
      if (playersLife === 0) {
        restart("Try Again");
      }
    }
  }
  // check if you win this game
  if (toggleCard.length === 8) {
    restart("you win");
  }
};

//restart the Game
const restart = (text) => {
  let cardData = randomMemoryCard();
  let faces = document.querySelectorAll(".item");
  let card = document.querySelectorAll(".grid-container");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    card[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
      card[index].style.pointerEvents = "visible";
      faces[index].src = item.imagesSrc;
      faces[index].setAttribute("name", item.name);
      section.style.pointerEvents = "visible";
    }, 1000);
  });
  //reset life
  playersLife = 6;
  playersLifeCount.textContent = playersLife;
  setTimeout(() => window.alert(text), 100);
};
