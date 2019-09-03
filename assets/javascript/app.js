//setting up questions and answers as variables//

const questions = ["what is kirby?", "who is kirby's rival?", "how does kirby travel?"]

const correctAnswers = ["star warrior", "meta knight", "warp star"]

const answers = [
    ["star warrior", "kirby", "a ball", "pink"],
    ["waddle-dee", "bandana dee", "king dedede", "meta knight"],
    ["his feet", "wheelie", "warp star", "flies"],
]

let intervalId;
let number = 10;

//setting up the function for questions


//timer function
$("#start").on("click", function() {

    $(this).hide();

    $("#time").html("<h3>Time remaining: 10 seconds </h3>" );

    run()
});

function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#time").html("<h3>Time remaining: " + number + "seconds</h3>" + "<br>");

    if (number === 0) {
        stop();


        }
}

function stop() {
    clearInterval(intervalId);
    alert("time's up!");
}