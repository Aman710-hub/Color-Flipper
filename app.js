const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// selecting elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event listners to chage color
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  // chaging colors of body and text
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//function to get random namber
getRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};
