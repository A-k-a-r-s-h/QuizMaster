const quizDB=[
{
    question: "Q1. The UNIX operating system is generally known as",
    a:"Multi User Operating System",
    b:"General Application",
    c:"Single User Operating System",
    d:"Single User Application Program",
    ans:"ans1"
},
{
    question: "Q2. Which is not an extension of a picture file on a computer?",
    a:".jpeg",
    b:".png",
    c:".mdb",
    d:".gif",
    ans:"ans3"
},
{
    question: "Q3. A nibble is equal to bits",
    a:"4",
    b:"8",
    c:"16",
    d:"32",
    ans:"ans1"
},
{
    question: "Q4. A translator for the assembly language to machine language",
    a:"Assembler",
    b:"Compiler",
    c:"Interpreter",
    d:"Linker",
    ans:"ans1"
},
{
    question: "Q5. Dot matrix is an example of which of the following",
    a:"Software",
    b:"Scanner",
    c:"Printer",
    d:"Keyboard",
    ans:"ans3"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questioncount=0;
let score=0;

const loadquestion = () => {
    const questionlist = quizDB[questioncount];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

loadquestion();

const getcheckanswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedanswer = getcheckanswer();
    console.log(checkedanswer);
    if(checkedanswer == quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselectall();

    if(questioncount < quizDB.length){
        loadquestion();
    }
    else{
        showScore.innerHTML = `
        <h3> Score:- ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Take Quiz Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }

});