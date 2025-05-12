let userScore = 0 ;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");
const getCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});
const drawGame = ()=>{
    console.log("Game was Draw");
    msg.innerText = "Game Was Draw.play Again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,choiceId,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        console.log("You win");
        msg.innerText = `You Win.your ${choiceId} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerText =compScore ;
        console.log("Computer won");
        msg.innerText = `You loose ${CompChoice} beats your${choiceId}`;
        msg.style.backgroundColor = "Red";
    }
}
const playgame = (choiceId) =>{
    console.log(choiceId);
    let CompChoice=getCompChoice();
    console.log(CompChoice);

    if(choiceId === CompChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = CompChoice === "paper"? false :true;
        }else if(choiceId==="paper"){
            userWin = CompChoice ==="scissors"? false:true;
        }else{
            userWin = CompChoice === "rock"? false:true;
        }
        showWinner(userWin,choiceId , CompChoice);
    };
};