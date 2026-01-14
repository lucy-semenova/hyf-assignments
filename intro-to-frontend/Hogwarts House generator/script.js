// Get elements from the DOM
const nameInput = document.getElementById("nameInput");
const sortButton = document.getElementById("sortButton");
const retryButton = document.getElementById("retryButton");
const result = document.getElementById("result");
const houseImage = document.getElementById("houseImage");
const houseDescription = document.getElementById("houseDescription")

//Houses 
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const houseData = {
  Gryffindor: {
    img: "images/Gryffindor.png",
    desc: "Gryffindor values bravery, daring, and chivalry."
  },
  Hufflepuff: {
    img: "images/Hufflepuff.png",
    desc: "Hufflepuff prioritizes hard work, loyalty, patience, and fair play."
  },
  Ravenclaw: {
    img: "images/Ravenclaw.png",
    desc: "Ravenclaw seeks wisdom, wit, learning, and creativity."
  },
  Slytherin: {
    img: "images/Slytherin.png",
    desc: "Slytherin embodies ambition, cunning, resourcefulness, and leadership."
  }
};

// Event listeners
sortButton.addEventListener("click", assignHouse);
retryButton.addEventListener("click", reset); 

//Get random house
function getRandomHouse() {
  return houses[Math.floor(Math.random() * houses.length)];
}

//Assign house to user
function assignHouse() {
  const name = nameInput.value.trim();

   if (name === "") {
       result.textContent = "Please, enter your name";
       return;
    }
    
    const house = getRandomHouse();
    document.body.classList.add("sorted");

    result.textContent = `${name} is being sorted into ${house}!`;
    houseImage.src = houseData[house].img;
    houseImage.alt = `${house} logo`;
    houseImage.style.display = "block";
    houseDescription.textContent = houseData[house].desc;
}

//Reset the sorting
function reset() {
  document.body.classList.remove("sorted");
  nameInput.value = "";
  result.textContent = "";
  houseDescription.textContent = "";
  houseImage.style.display = "none";
}

 



