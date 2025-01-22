let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset-btn");
let new_Game_Btn = document.querySelector("#new-game");
let msg_Container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn_O = true; // Player O and Player X

const winning_Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        count++;
        console.log(count)
        if(count === 9){
            msg.innerText = `ITS A DRAW`;
            msg_Container.classList.remove("hide");
            disabled_Boxes();
            count = 0;
        }
        if(turn_O){
            box.innerText = 'O';
            box.style.color = 'green';
            turn_O = false;
        }        
        else{
            box.innerText = 'X';
            box.style.color = 'purple';
            turn_O = true;
        }
        box.disabled = true;    

        check_Winner();
    })
})

const disabled_Boxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabled_Boxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const show_Winner = (winner) => {
    count = 0;  
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_Container.classList.remove("hide");
    disabled_Boxes();
}


const check_Winner = () => {
    for(let  pattern of winning_Patterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        
        let pos1_Val = boxes[pattern[0]].innerText;
        let pos2_Val = boxes[pattern[1]].innerText;
        let pos3_Val = boxes[pattern[2]].innerText;

        if(pos1_Val != "" && pos2_Val != "" && pos3_Val != ""){
            if(pos1_Val === pos2_Val && pos2_Val === pos3_Val){
                console.log(pos1_Val, "Winner");
                show_Winner(pos1_Val);
            }
        }
    }

} 
const reset_Game = () => {
    turn_O = true;
    enabled_Boxes();
    msg_Container.classList.add("hide");
}

new_Game_Btn.addEventListener("click", reset_Game);
reset_button.addEventListener("click", reset_Game);