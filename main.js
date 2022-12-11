let button = document.querySelector(".neon-button");
let counter = document.querySelector(".counter");

button.addEventListener("click", () => {
  button.classList.add("hide");
  for (let i = 1; i <= 100; i++) {
    setTimeout(() => {
      counter.innerHTML += ` ${generateText(i)}`;
    }, i*300);
  }
});

function generateText(i) {
  let result;
  if (i % 3 === 0 && i % 5 === 0) {
    result = "FizzBuzz";
  } else if (i % 3 === 0) {
    result = "Fizz";
  } else if (i % 5 === 0) {
    result = "Buzz";
  } else {
    result = i;
  }
  return result;
}
