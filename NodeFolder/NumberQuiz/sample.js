

let questionNumber = 0;
let correctAnswer = 0;
const questions =[
    "3, 1, 4, 1, 5",
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
];

const answer = ["9","8","36","13","32"];

function checkResult(){

    var clientAnswer = document.getElementById("answer").value;
    document.getElementById("answer").value = '';
    
    if(clientAnswer==answer[questionNumber]){
        correctAnswer++;
        document.getElementById("result").innerHTML = `Your current score is ${correctAnswer}`;
        alert('Correct Answer');
    }
    else{
        alert('Wrong Answer');
    }

    if(questionNumber==questions.length-1){

        document.getElementById("result").innerHTML = `Your current score is ${correctAnswer}`;
        document.getElementById("guestPharagraf").innerHTML = `You have completed the Number Quiz, with the score of  ${correctAnswer} out of ${questions.length}`;
        document.getElementById("form").remove();
    }

    questionNumber++;

}