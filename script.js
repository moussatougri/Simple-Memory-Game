//Selectoren
const gridContainer = document.querySelector(".grid-container");

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

randomMemoryCard();
