let btn = document.querySelector(".theme");
let mode = "light";
btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    document.querySelector("body").style.background =
      "linear-gradient(135deg, #2c3e50, #4ca1af";
    document.querySelector("h2").style.color = "white";
  } else {
    mode = "light";
    document.querySelector("body").style.background =
      "linear-gradient(135deg, #0f0c29, #302b63, #24243e)";
    document.querySelector("h2").style.color = "white";
  }
  console.log(mode);
});

let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelectorAll(".reset");
let turnO = true;
const win_pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 5, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "o";
      box.style.backgroundColor = "#2196F3";
      box.style.color = "white";
      turnO = false;
    } else {
      box.innerText = "x";
      box.style.backgroundColor = "#FF9800";
      box.style.color = "white";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let pattern of win_pattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        disableboxes();
        showWinner(pos1.toUpperCase());
      }
    }
  }
};

let resetBtns = document.querySelectorAll(".reset");
resetBtns.forEach((reset) => {
  reset.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerText = "";
      box.style.backgroundColor = "white";
      box.style.color = "black";
      box.disabled = false;
    });
    turnO = true;
  });
});

const showWinner = (winner) => {
  setTimeout(() => {
    alert(`${winner} wins!`);
  }, 100);
};
