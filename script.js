let boxes = document.querySelectorAll(".box");
let turnO = true;
let msgContainer = document.querySelector(".msg-winner");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};
const newGame=()=>{
  
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
  

}
const showWinner = (pos1) => {
  msg.innerText = `Congratulations,Winner is ${pos1} !!!`;
  
  msgContainer.classList.remove("hide");
  disableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};
newBtn.addEventListener("click",()=>{
  console.log("newGame enabled");
  newGame();
});
resetBtn.addEventListener("click",()=>{
  console.log("ResetGame enabled");
  newGame();
});