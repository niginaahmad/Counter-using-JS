const value = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")
const allBtns = document.querySelectorAll(".btn")
const allParags = document.querySelectorAll("p")

let count = 0;

allBtns.forEach(addEventToBtn)

allParags.forEach(addEventToBtn)

function addEventToBtn(el) {
  el.addEventListener('click', function (event) {
    const classes = event.currentTarget.classList
    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++
    } else {
      count = 0;
    }
    setValAndColor()
  })
}

function setValAndColor() {
  if (count > 0) {
    value.style.color = "green"
  } else if (count < 0) {
    value.style.color = "red"
  } else {
    value.style.color = "black"
  }
  value.innerHTML = count;
}