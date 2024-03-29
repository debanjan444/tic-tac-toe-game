let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const restGame = () => {
turno = true;
enableBoxes();
msgContainer.classList.add("hide");
}
boxes.forEach((val) => {
  val.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turno === true){
      val.innerText = "O";
      turno = false;
    }
    else{
      val.innerText = "X";
      turno = true;
    }
    val.disabled = true;
    checkWinner();
  })
})
const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = ()=> {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner)=>{
  msg.innerText = `congrats winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns){
  //  console.log(pattern[0],pattern[1],pattern[2]);
    //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;
    if(pos1Value != "" && pos2Value !=  "" && pos3Value != ""){
      if(pos1Value === pos2Value  && pos2Value === pos3Value){
        console.log("winner",pos1Value);
        showWinner(pos1Value);
      }
    }
  }
}
newGamebtn.addEventListener("click",restGame);
resetbtn.addEventListener("click",restGame);
