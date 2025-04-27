let compscore = 0;
let userscore = 0;
const choices = document.querySelectorAll(".choice");
const messageBox = document.querySelector(".message");
const userScoreDisplay = document.querySelector("#user");
const compScoreDisplay = document.querySelector("#comp");

const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const updateScore = () => {
    compScoreDisplay.innerText = compscore;
    userScoreDisplay.innerText = userscore;
};

const glowEffect = (element, className) => {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 500);
};

const playGame = (userChoice) => {
    const computer = compChoice();
    console.log("Computer choice:", computer);
    console.log("User choice:", userChoice);

    if (userChoice === computer) {
        messageBox.innerText = "IT'S A DRAW";
        messageBox.style.backgroundColor = "#D3D3D3";
        return;
    }

    let userWin = false;
    if (userChoice === "rock") {
        userWin = computer === "scissor";
    } else if (userChoice === "paper") {
        userWin = computer === "rock";
    } else if (userChoice === "scissor") {
        userWin = computer === "paper";
    }

    if (userWin) {
        userscore++;
        messageBox.innerText = "USER WINS";
        messageBox.style.backgroundColor = "green";
        glowEffect(document.getElementById(userChoice), "green-glow");
        console.log("You Win!");
    } else {
        compscore++;
        messageBox.innerText = "COMPUTER WINS";
        messageBox.style.backgroundColor = "red";
        glowEffect(document.getElementById(computer), "red-glow");
        console.log("Computer Wins!");
    }

    updateScore();
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
