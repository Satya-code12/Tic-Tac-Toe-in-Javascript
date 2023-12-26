let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// playerX, playerY
let turnO = true;

// let arr = ["apple", "orange", "banana"]; ---> 1D array...

// let arr2 = [["mercedies", "audi", "maruti"], ["potato", "ladyfinger"], ["red", "black"], ["pants", "shirts"]];

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6]
];

btns.forEach((btn) => {
  btn.addEventListener("click", () =>{
    if(turnO === true){ //if button was clicked it will be the turn of O
      btn.innerText = "O";
      turnO = false;// then it will move to the opponent, X turn
    }else{
      btn.innerText = "X";//player X turn
      turnO = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBtns();
  msgContainer.classList.add("hide");
};

const disableBtns = () =>{
  for(let btn of btns){
    btn.disabled = true;
  }
};

const enableBtns = () =>{
  for(let btn of btns){
    btn.disabled = false;
    btn.innerText = "";
  }
};

const showWinner =(winner) =>{
  msg.innerHTML = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBtns();
};



const checkWinner = () => {
      for(patterns of winPatterns){
        let position1Value = btns[patterns[0]].innerText;
        let position2Value = btns[patterns[1]].innerText;
        let position3Value = btns[patterns[2]].innerText;

        if(position1Value != "" && position2Value != "" && position3Value != ""){
          if(position1Value === position2Value && position2Value === position3Value){
            showWinner(position1Value);
          }
        }
      }    
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



