
        const resultDiv = document.querySelector("#result");

        //console.log("Hello World!");
        function getComputerChoice(){
            const randNumber = Math.random();
            //console.log(randNumber);
            if (randNumber < 0.33) {
                return 'rock';
            } else if (randNumber < 0.66) {
                return 'paper';
            } else {
                return 'scissor';
            }
        }
        //console.log(getComputerChoice());

        function getHumanChoice(humanChoice){
            if(humanChoice.toLowerCase() == "rock"){
                return "rock";
            }else if(humanChoice.toLowerCase() == "paper"){
                return "paper";
            }else if(humanChoice.toLowerCase() == "scissor"){
                return "scissor";
            }else{
                return "Invalid Option";
                
            }

        }

        const player = prompt("Enter your Name");
        //console.log(getHumanChoice(humanChoice));

        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice){
             const choices = ["rock", "paper", "scissor"];
            if(humanChoice === computerChoice){
                 alert("It's a tie! Both chose " + humanChoice + " and " + computerChoice);
              }else if (
                (humanChoice === "rock" && computerChoice === "scissor") ||
                (humanChoice === "scissor" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
            ) {
                alert("You win!  " + humanChoice + " beats " + computerChoice + ".");
               humanScore++;
            } else {
                alert("You lose!  " + computerChoice + " beats " + humanChoice + ".");
               computerScore++;
            }

            

         }

         function game(humanChoice){
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            resultDiv.textContent = `${player} Player: ${humanScore} Computer: ${computerScore}`;

            if (humanScore === 5) {
                resultDiv.textContent = `Congratulations!  ${player} You won the game with a score of ${humanScore} to ${computerScore}.`;
                humanScore = 0;
                computerScore = 0;
                triggerConfetti();
                setTimeout(() => {
                    //window.location.reload(); // Reload the page after 3 seconds
                    const choice = prompt(`${player} want to play more?? Yes/No`);
                    if(choice.toLowerCase() === 'yes'){
                        window.location.reload();
                    }else{
                        window.close();
                    }
                }, 1000);
                

            } else if (computerScore === 5) {
                resultDiv.textContent = `Sorry, ${player} you lost the game. The final score is ${humanScore} to ${computerScore}.`;
                humanScore = 0;
                computerScore = 0;
                setTimeout(() => {
                    //window.location.reload(); // Reload the page after 3 seconds
                    const choice = prompt(`${player} want to play more?? Yes/No`);
                    if(choice.toLowerCase() === 'yes'){
                        window.location.reload();
                    }else{
                        window.close();
                    }
                }, 1000);
            }


         }

        //const humanSelection = getHumanChoice(humanChoice);
        //playRound(humanSelection, getComputerChoice());

        // adding event listener for dynamic input

        // the JavaScript file
        const rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
            game('rock');
        });

        const paper = document.querySelector("#paper");
        paper.addEventListener("click", () => {
            game('paper');
        });

        const scissor = document.querySelector("#scissor");
        scissor.addEventListener("click", () => {
            game('scissor');
        });

        const root = document.querySelector(".root");

        const para = document.createElement("p");
        para.textContent = `${player} can you start the game now`;
        para.style.display = "flex";
        para.style.justifyContent = "center";
        
        root.appendChild(para);

        function triggerConfetti() {
            // Trigger confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        

        // let button = document.querySelector("button");
        // button.addEventListener('click', (event)=>{
        //     let target = event.target;

        //     switch(target.id){
        //         case 'rock':
        //             playRound(getHumanChoice('rock'),getComputerChoice());
        //             break;
        //         case 'paper':
        //             playRound(getHumanChoice('paper'), getComputerChoice());
        //             break;
        //         case 'scissor':
        //             playRound(getHumanChoice('scissor'), getComputerChoice());
        //             break;
        //     }
        // });
        
        

        // function playGame(){
        //     for(let i=1;i<=5;i++){
        //         console.log(i + " round winner");
        //         const computerSelection = getComputerChoice();
        //         playRound(humanSelection,computerSelection);
        //         // console.log(humanScore);
        //         // console.log(computerScore);
        //     }
        //     if(humanScore>computerScore) {
        //             console.log("Human won the match, total round out of 5 it won " + humanScore);
        //         }else{
        //             console.log("Computer won the match, total round out of 5 it won " + computerScore);

        //         }
        // }
        // playGame();

   