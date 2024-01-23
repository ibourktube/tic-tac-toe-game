let square = document.querySelectorAll(".square");
let startMenu = document.getElementById("start-menu");
let xBtn = document.getElementById("x");
let oBtn = document.getElementById("o");
let txt = document.getElementById("text");
let btnsBox = document.getElementById("btns");
let startBtn = document.getElementById("start");

let letter = "x";
let isChoose = false;
let count = 0;
let squareMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

xBtn.addEventListener("click", () => {
  letter = "x";
  xBtn.classList.add("click");
  oBtn.classList.remove("click");
  isChoose = true;
});

oBtn.addEventListener("click", () => {
  letter = "o";
  oBtn.classList.add("click");
  xBtn.classList.remove("click");
  isChoose = true;
});

startBtn.addEventListener("click", () => {
  if (isChoose) {
    startMenu.style.display = "none";
    reset();
  }
});

square.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (!e.target.classList.contains("close")) {
      e.target.innerHTML = letter;
      e.target.classList.add("close");
      let col = Math.floor(index / 3);
      let row = index % 3;
      squareMatrix[col][row] = letter;
      if (letter === "x") {
        letter = "o";
      } else {
        letter = "x";
      }
      winGame();
      count++;
      if (count >= 9) {
        endGame();
        txt.innerHTML = "is equal";
      }
    }
  });
});

function winGame() {
  for (let i = 0; i < 3; i++) {
    if (
      squareMatrix[i][0] === squareMatrix[i][1] &&
      squareMatrix[i][2] === squareMatrix[i][1] &&
      squareMatrix[i][0] !== null
    ) {
      endGame(squareMatrix[i][0]);
      square[i * 3].classList.add("win");
      square[i * 3 + 1].classList.add("win");
      square[i * 3 + 2].classList.add("win");
    }
    if (
      squareMatrix[0][i] === squareMatrix[1][i] &&
      squareMatrix[2][i] === squareMatrix[1][i] &&
      squareMatrix[0][i] !== null
    ) {
      console.log(squareMatrix[0][i], "win");
      square[i].classList.add("win");
      square[i + 3].classList.add("win");
      square[i + 3 * 2].classList.add("win");
      endGame(squareMatrix[0][i]);
    }
  }

  if (
    squareMatrix[0][0] === squareMatrix[1][1] &&
    squareMatrix[1][1] === squareMatrix[2][2] &&
    squareMatrix[0][0] !== null
  ) {
    endGame(squareMatrix[0][0]);
    square[0].classList.add("win");
    square[4].classList.add("win");
    square[8].classList.add("win");
  }
  if (
    squareMatrix[0][2] === squareMatrix[1][1] &&
    squareMatrix[1][1] === squareMatrix[2][0] &&
    squareMatrix[2][0] !== null
  ) {
    square[2].classList.add("win");
    square[4].classList.add("win");
    square[6].classList.add("win");
    endGame(squareMatrix[2][0]);
  }
}

function endGame(winner) {
  startMenu.style.display = "flex";
  btnsBox.style.display = "none";
  txt.innerHTML = winner + " is win";
  startBtn.innerHTML = "Restsart";
}
function reset() {
  count = 0;
  squareMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  square.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("win");
    item.classList.remove("close");
  });
}

// ######################################

/*
square[2].classList.add("win");
square[4].classList.add("win");
square[6].classList.add("win");
startMenu.style.display = "flex";
startBtn.innerHTML = "Restart";
btnBox.style.display = "none";
winnerName.innerHTML = squareMatrix[2][0] + " is win";



square[0].classList.add("win");
      square[4].classList.add("win");
      square[8].classList.add("win");
      startMenu.style.display = "flex";
      startBtn.innerHTML = "Restart";
      btnBox.style.display = "none";
      winnerName.innerHTML = squareMatrix[0][0] + " is win";

      square[i].classList.add("win");
      square[i + 3].classList.add("win");
      square[i + 3 * 2].classList.add("win");
      startMenu.style.display = "flex";
      startBtn.innerHTML = "Restart";
      btnBox.style.display = "none";
      winnerName.innerHTML = squareMatrix[0][i] + " is win";

      square[i * 3].classList.add("win");
      square[i * 3 + 1].classList.add("win");
      square[i * 3 + 2].classList.add("win");
      startMenu.style.display = "flex";
      startBtn.innerHTML = "Restart";
      btnBox.style.display = "none";
      winnerName.innerHTML = squareMatrix[i][0] + " is win";



      let startMenu = document.getElementById("start-menu");
// let startBtn = document.getElementById("startBtn");
// let winnerName = document.getElementById("winner-name");
// let btns = document.querySelectorAll(".choseBtn");
// let btnBox = document.querySelector(".btns");





function resetAll() {
  count = 0;
  squareMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  square.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("close");
    item.classList.remove("win");
  });
}

if (count === 9) {
        startMenu.style.display = "flex";
        console.log("is equal");
      }

      btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    letter = e.target.innerHTML;
    isChose = true;
    item.classList.add("active")
  });
});

startBtn.addEventListener("click", (e) => {
  if (isChose) {
    startMenu.style.display = "none";
    resetAll();
  }
});
















*/

// ############################################################
