// Create an array that has all the hex number and letter values
const hexNumbers = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Select all the elements were going to be working with
// Target button
const hexBtn = document.querySelector(".hexBtn");

// Target body
const bodyBcg = document.querySelector("body");

// Target span
const hex = document.querySelector(".hex");

// Add click event listener with the call back function
hexBtn.addEventListener("click", getHex);

// Create callback function
function getHex() {
  // Create a variable that holds hex color
  let hexCol = "#";
  // Create a for loop that generates six numbers/letters and from array
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    // console.log(random);
    hexCol += hexNumbers[random];
    // console.log(hexCol);
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
  }
}
