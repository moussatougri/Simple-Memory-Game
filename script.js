//Selectoren
const section = document.querySelector("section");
const playersLifeCount = document.querySelector(".player-lives-count");
const playersLife = 6;

//Memory Images
const memoryCard = () => [
  {
    imagesSrc: "images/outdoor-pool-gee9ffd8ee_1920.jpg",
  },
  {
    imagesSrc: "images/outdoor-pool-gee9ffd8ee_1920.jpg",
  },
  {
    imagesSrc: "images/mountains-gf5569e410_1920.jpg",
  },
  {
    imagesSrc: "images/mountains-gf5569e410_1920.jpg",
  },
  {
    imagesSrc: "images/milk-g1fbcead56_1920.jpg",
  },
  {
    imagesSrc: "images/milk-g1fbcead56_1920.jpg",
  },
  {
    imagesSrc: "images/lemons-g047aa695f_1920.png",
  },
  {
    imagesSrc: "images/lemons-g047aa695f_1920.png",
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

    images.src = img.imagesSrc;

    //appendChild items
    section.appendChild(gridContainer);
    gridContainer.appendChild(images);
    gridContainer.appendChild(gridItem);

    gridContainer.addEventListener("click", (e) => {
      gridContainer.classList.toggle("toggle-card");
    });
  });
};
cardGenerator();
