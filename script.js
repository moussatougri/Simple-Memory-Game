//Selectoren
const section = document.querySelector("section");
const playersLifeCount = document.querySelector(".player-lives-count");
const playersLife = 6;

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
      gridContainer.classList.toggle("toggle-card");
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

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
    } else {
      console.log("wrong");
    }
  }
};
