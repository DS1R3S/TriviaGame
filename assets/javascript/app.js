
// let quizContainter = document.getElementById('quiz');
// let resultsContainer = document.getElementById('results');
// let submitButton = document.getElementById('submit');

// function buildQuiz() {
//     for (var i = 0; i < myQuestions.length; i++) {
//         var question = myQuestions[i].question;
//         $('#quiz').text(question);
    
//         var options = myQuestions[i].answers;
//         for (var opt in options) {
//             $('#quiz').text(opt);
//         }
//     }
// };

// for (var i = 0; i < myQuestions.length; i++) {
//     var question = myQuestions[i].question;
//     $('#quiz').html(question);
// };


const myQuestions = [
    {
        question: "The night Ron Artest decided to fight people in the crowd is infamously know as what?",
        answers: {
            a: 'Free for All',
            b: 'Brawl for All',
            c: 'The Malice at the Palace',
            d: 'World War 3'
        },
        correctAnswer: this.answers.c,
    },

    {
        question: "Which player holds the record for most career points scored?",
        answers: {
            a: 'Kobe Bryant',
            b: 'Michael Jordan',
            c: 'Kareem Abdul Jabbar',
            d: 'Shaq',
        },
        correctAnswer: this.answers.c,

    },
    {
        question: "Who is the best player of all time?",
        answers: {
            a: 'Lebron James',
            b: 'Wilt Chamberlain',
            c: 'Bill Russell',
            d: 'Michael Jordan',
        },
        correctAnswer: this.answers.a,
    },
];

console.log(myQuestions[0].question.correctAnswer);
