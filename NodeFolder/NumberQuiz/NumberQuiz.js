
/*
private static var questions ={
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
};

*/

var quizQuestion = 0;
var correctAnswer = 0
const questions =[
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
];

const answer = ["9","36","13","32"]

function checkResult(){

    if(quizQuestion==2){
        document.getElementById("answer").disabled = true;
            alert(quizQuestion);

    }

    var clientAnswer = document.getElementById("answer").value;

    if(clientAnswer==answer[quizQuestion]){
        correctAnswer++;
    }
    quizQuestion++;

    document.getElementById("sequence").value = questions[quizQuestion];

    alert(quizQuestion);
    
}



/*
    if(quizQuestion==3){
        document.getElementById("btn").remove();
        document.getElementById("lbYouranswer").remove();
        document.getElementById("answer").remove();

        document.getElementById("result").innerHTML = `Your current score is ${correctAnswer}`;
        alert("quizQuestion");
    }
    */