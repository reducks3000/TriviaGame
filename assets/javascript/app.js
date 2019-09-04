//setting up questions and answers as letiables//
let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let intervalId;
let number = 10;

//setting up the function for questions
const questions = [{
    question: "what is kirby?",
    answerList: ["star warrior", "kirby", "a ball", "pink"],
    answer: 0
},{
    question: "who is kirby's rival?",
    answerList: ["waddle-dee", "bandana dee", "king dedede", "meta knight"],
    answer: 3
},{
    question: "how does kirby travel?",
    answerList: ["his feet", "wheelie", "warp star", "flies"],
    answer: 2

},{

}]

//timer function
$("#start").on("click", function() {

//hides button

    $(this).hide();

//displays timer
    $("#time").html("<h3>Time remaining: 10 seconds </h3>" );

//starts timer countdown
    run()
//displays question 
$("#question1").html("<h3>" + questions[0].question + "</h3>");
$("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label>"
);

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    // $("#question4").html("<h3>" + questions[3].question + "</h3>");
    // $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    // );

    // // Question 5
    // $("#question5").html("<h3>" + questions[4].question + "</h3>");
    // $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    // );
    // // Question 6
    // $("#question6").html("<h3>" + questions[5].question + "</h3>");
    // $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    // );
    // // Question 7
    // $("#question7").html("<h3>" + questions[6].question + "</h3>");
    // $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    // );
    // // Question 8
    // $("#question8").html("<h3>" + questions[6].question + "</h3>");
    // $("#answer8").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    // );
    // // Question 9
    // $("#question9").html("<h3>" + questions[6].question + "</h3>");
    // $("#answer9").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    // );
    // // Question 10
    // $("#question10").html("<h3>" + questions[6].question + "</h3>");
    // $("#answer10").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
    //     + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
    //     + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
    //     + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    // );

        // submit button
        $("#submit").html("<button id='done' class='btn'>Finished!</button>");

        //click event starts score keeping function and final tallies
        $("#done").on("click", function() {

            //keeping track of scores
            keepingScore();

            //results
            displayResults();
        });

});

function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#time").html("<h3>Time remaining: " + number + "seconds</h3>" + "<br>");

    if (number === 0) {
        
    //runs stop function

        stop();

        keepingScore();
        displayResults();


    }
}

function stop() {
    clearInterval(intervalId);
}

//function use to display all scores
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#question8").hide();
    $("#answer8").hide();
    $("#question9").hide();
    $("#answer9").hide();
    $("#question10").hide();
    $("#answer10").hide();
    $("#submit").hide();

    $("#results").html("<h3>All Done!</h3>");
    $("#correct").html("Correct!: " + correctAnswers);
    $("#incorrect").html("Incorrect: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

function keepingScore() {

    let userAnswer1 = $("input[name='answer1']:checked").val();
    let userAnswer2 = $("input[name='answer2']:checked").val();
    let userAnswer3 = $("input[name='answer3']:checked").val();
    let userAnswer4 = $("input[name='answer4']:checked").val();
    let userAnswer5 = $("input[name='answer5']:checked").val();
    let userAnswer6 = $("input[name='answer6']:checked").val();
    let userAnswer7 = $("input[name='answer7']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}