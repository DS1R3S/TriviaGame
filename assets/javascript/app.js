$(document).ready(function () {

    var questions = [
        {
            question: "The night Ron Artest decided to fight people in the crowd is infamously know as what?",
            answers: ["Free for All", "The Malice at the Palace", 'World War 3', 'Brawl for All'],
            correctAnswer: 1,
            photo: "assets/images/artest.gif",

        },
        {
            question: "Which player holds the record for most career points scored?",
            answers: ["Kobe Bryant", "Kareem Abdul Jabbar", "Shaq", "Michael Jordan",],
            correctAnswer: 1,
            photo: "assets/images/kareemThumbs.gif",
        },
        {
            question: "Who is the best player of all time?",
            answers: ["Lebron James", "Wilt Chamberlain", "Bill Russell", "Michael Jordan",],
            correctAnswer: 0,
            photo: "assets/images/lebronFace.gif",
        },
        {
            question: "What player score the most points in a single game?",
            answers: ["Kobe Bryant", "Devin Booker", "Wilt Chamberlain", "Larry Bird"],
            correctAnswer: 2,
            photo: "assets/images/wilt100.jpg",
        },
        {
            question: "Who has the most NBA championships as a player?",
            answers: ["Bill Russell", "Michael Jordan", "Robert Horry", "Phil Jackson"],
            correctAnswer: 0,
            photo: "assets/images/Bill.jpeg",
        },
        {
            question: "Which team has the best record in a single season?",
            answers: ["Chicago Bulls", "New York Knicks", "L.A. Lakers", "Golden State Warriors"],
            correctAnswer: 3,
            photo: "assets/images/kyrie.gif",
        },
        {
            question: "Which player has the highest career 3pt field goal percentage?",
            answers: ["Steph Curry", "Klay Thompson", "Steve Kerr", "Ray Allen"],
            correctAnswer: 2,
            photo: "assets/images/kerr.gif",
        },
        {
            question: "Which team drafted Kobe Bryant?",
            answers: ["L.A. Lakers", "L.A. Clippers", "Charlotte Hornets", "Boston Celtics"],
            correctAnswer: 2,
            photo: "assets/images/kobe.gif",
        },
        {
            question: "Which player started the trend of going directly from high school to the pro's?",
            answers: ["Kobe Bryant", "Lebron James", "Moses Malone", "Hakeem Olajuwon"],
            correctAnswer: 2,
            photo: "assets/images/moses.jpg",
        },
        {
            question: "Michael Jordan wore three different numbers during his career, 23, 45 and _ ?",
            answers: ["#33", "#12", "#99", "#50"],
            correctAnswer: 1,
            photo: "assets/images/shrug.gif",
        }

    ];
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = questions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();
    // click start button to start game
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < questions.length; i++) {
            holder.push(questions[i]);
        }
    })
    //timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    // timer countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.answers[pick.correctAnswer] + "</p>");
            hidepicture();
        }
    }
    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion() {
        //generate random index in array
        index = Math.floor(Math.random() * questions.length);
        pick = questions[index];

        //iterate through answer array and display
        $("#question").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.answers.length; i++) {
            var userChoice = $("<button>");
            userChoice.addClass("choices");
            userChoice.html(pick.answers[i]);
            //assign array position to it so can check answer
            userChoice.attr("guessvalue", i);
            $("#choices").append(userChoice);
        }
        //click function to select answer and outcomes
        $(".choices").on("click", function () {
            //grab array position from userGuess
            userGuess = parseInt($(this).attr("guessvalue"));

            //correct guess or wrong guess outcomes
            if (userGuess === pick.correctAnswer) {
                stop();
                correctCount++;
                userGuess = "";
                $('#question').html("<img src=" + pick.photo + ">");
                $("#choices").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $('#question').html("<img src= assets/images/mjcrying.gif >")
                $("#choices").html("<p>Wrong! The correct answer is: " + pick.answers[pick.correctAnswer] + "</p>");
                hidepicture();
            }
        })
    }
    function hidepicture() {
        newArray.push(pick);
        questions.splice(index, 1);

        setTimeout(function () {
            $("#choices").empty();
            timer = 10;

            //run the score screen if all questions answered
            if ((wrongCount + correctCount + unanswerCount) === qCount) {
                $("#question").empty();
                $("#question").html("<h3>Game Over!  Here's how you did: </h3>");
                $("#choices").append("<h4> Correct: " + correctCount + "</h4>");
                $("#choices").append("<h4> Incorrect: " + wrongCount + "</h4>");
                $("#choices").append("<h4> Unanswered: " + unanswerCount + "</h4>");
                $("#reset").show();
                correctCount = 0;
                wrongCount = 0;
                unanswerCount = 0;

            } else {
                runTimer();
                displayQuestion();

            }
        }, 4000);


    }
    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#choices").empty();
        $("#question").empty();
        for (var i = 0; i < holder.length; i++) {
            questions.push(holder[i]);
        }
        runTimer();
        displayQuestion();

    })

});




