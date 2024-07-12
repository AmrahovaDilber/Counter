const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const increaseBtn = document.querySelector("#increaseBtn");
const number = document.querySelector("#number");
const input = document.querySelector("#input");

increaseBtn.addEventListener("click", () => {
  const value = parseInt(input.value);
  number.innerHTML = parseInt(number.innerHTML) + value;
  increaseBtn.classList.add("bg-green-400");
  decreaseBtn.classList.remove("bg-red-500");
});

decreaseBtn.addEventListener("click", () => {
  const value = parseInt(input.value);
  number.innerHTML = parseInt(number.innerHTML) - value;
  decreaseBtn.classList.add("bg-red-500");
  increaseBtn.classList.remove("bg-green-400");
});

resetBtn.addEventListener("click", () => {
  number.innerHTML = 0;
  decreaseBtn.classList.remove("bg-red-500");
    increaseBtn.classList.remove("bg-green-400");
    input.value=0
});




