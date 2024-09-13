const quizData = [
    {
        question: "1)What is an object in Java?",
        a: "A blueprint for creating classes",
        b: "An instance of a class",
        c: "A collection of methods",
        d: "A type of data structure",
        correct: "b",
    },
    {
        question: "2)What is inheritance in Java?",
        a: "The process of creating a new class from an existing class",
        b: "The method to hide data within a class",
        c: "The ability to create multiple objects from a class",
        d: "The process of accessing private data",
        correct: "a",
    },
    {
        question: "3)What is the purpose of the main method in a Java program?",
        a: "To initialize the program's variables",
        b: "To start the execution of a Java application",
        c: "To create objects of a class",
        d: "To perform calculations",
        correct: "b",
    },
    {
        question: "4)Which of the following is a valid Java identifier?",
        a: "1stVariable",
        b: "variable-name",
        c: "variableName",
        d: "variable name",
        correct: "c",
    },
    {
        question: "5)What is polymorphism in Java?",
        a: "The ability to create multiple instances of a class",
        b: "The ability to have multiple methods with the same name but different parameters",
        c: "The process of hiding data within a class",
        d: "The ability to create subclasses from a superclass",
        correct: "b",
    },
    {
        question: "6)What does the void keyword indicate in a method definition?",
        a: "The method returns a value",
        b: "The method does not return any value",
        c: "The method is private",
        d: "The method is static",
        correct: "b",
    },
    {
        question: "7)Which of the following is not a Java access modifier?",
        a: "public",
        b: "private",
        c: "protected",
        d: "package",
        correct: "d",
    },
    {
        question: "8)What is the purpose of the super keyword in Java?",
        a: "To refer to the superclass of the current object",
        b: "To create a new instance of the superclass",
        c: "To access private methods of the superclass",
        d: "To override methods in the superclass",
        correct: "a",
    },
    {
        question: "9)What does the try-catch block do in Java?",
        a: "Handles exceptions that occur during runtime",
        b: "Creates a new thread",
        c: "Defines a method",
        d: "Initializes variables",
        correct: "a",
    },
    {
        question: "10)Which method is used to start a thread in Java?",
        a: "run()",
        b: "start()",
        c: "execute()",
        d: "begin()",
        correct: "b",
    },




];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const nextBtn = document.getElementById('next')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


if (currentQuiz === quizData.length - 1) {
    nextBtn.innerText = 'Submit';
} else {
    nextBtn.innerText = 'Next';
}
}

function deselectAnswers() {
answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
let answer;
answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
        answer = answerEl.id;
    }
});
return answer;
}

nextBtn.addEventListener('click', () => {
const answer = getSelected();
if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2>You have answered ${score}/${quizData.length} questions are correct</h2>
        `;
    }
}
});