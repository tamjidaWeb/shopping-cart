// const buttons = document.querySelectorAll('.button');
// const body=document.querySelector('body');

// buttons.forEach(function(button){
//   button.addEventListener('click', function(e){
//     console.log(e);
//     console.log(e.target);

//     if(e.target.id==='gray'){
//       body.style.backgroundColor = e.target.id;
//     }
//   })
// })



// const form=document.querySelector('form');
// form.addEventListener('submit',function(e){
//   e.preventDefault();

//   const height=parseInt(document.querySelector("#height").value)
//   const weight=parseInt(document.querySelector("#weight").value);
//   const results=document.querySelector("#results");

//   if(height === '' || height<0 || isNaN(height)){
//     results.innerHTML= `please give a valid height ${height}`
//   }
//   if(weight === '' || weight<0 || isNaN(weight)){
//     results.innerHTML= `please give a valid weight ${weight}`
//   }

//   else{
//     const bmi = (weight/ ((height*height)/10000)).toFixed(2);

//     results.innerHTML = `Here is your BMI result ${bmi}`
//   }
// })



// const form = document.querySelector('form');
// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   const height = parseInt(document.querySelector('#height').value)
//   const weight = parseInt(document.querySelector('#weight').value)
//   constresults = document.querySelector('#results');

//   if(height=== '' || height<0 || isNaN(height)){
//     results.innerHTML = `please enter a valid numberrrrrrrrrrr${height}`;
//   }
//   if(weight=== '' || weight<0 || isNaN(weight)){
//     results.innerHTML = `please enter a valid numberrrrrrrrrrr ${weight}`;
//   }

//   else{
//     const bmi = (weight/ ((height*height)/10000)).toFixed(2);
//     results.innerHTML= `here is the bmi ${bmi}`;
//   }
// })



// const clock = document.getElementById('clock');


// console.log(date.toLocaleTimeString());


// setInterval(function(){
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000)


// const clock = document.getElementById('clock');
// setInterval(function(){
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();

// }, 1000);


// const clock = document.getElementById('clock');
// setInterval(function (){
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// },1000);




const questions = [
    // {
    //     question: "What is 2+2?",
    //     answer: [
    //         { text: "4", correct: true },
    //         { text: "22", correct: false }
    //     ]
    // },
    {
        question: "which is the smallest planet?",
        answer: [
            { text: "earth", correct: false },
            { text: "mercury", correct: true },
            { text: "Pluto", correct: false },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "which is the largest dessert in the world?",
        answer: [
            { text: "shahaara", correct: false},
            {text: "Gobi", correct: false},
            {text:"Kalahari", correct: false},
            {text: "sahaara", correct: true}
        ]
    },
    {
        question: "Whcih is the lasgest animal in the planet?",
        answer:[
            {text: "Shark", correct: false},
            {text:"elephant", correct: false},
            { text:"Blue Whale", correct:true},
            {text:"lion", correct:false},
        ]
    }
];


const question = document.getElementById('question');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML= questionNo + " . " +currentQuestion.question;


    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct =  answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    } 
    else{
        selectBtn.classList.add('incorrect');
    }

Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct ===' true'){
        button.classList.add('correct')
    }
    
    button.disabled = true;
    // button.style.background = '#999'
});
nextButton.style.display = 'block';
// nextButton.style.textAlign = 'center';

}


function showScore(){
    resetState();
    question.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = ' Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz();
    }
})
startQuiz();













































