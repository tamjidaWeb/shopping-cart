const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id==='gray'){
      body.style.backgroundColor = e.target.id;
    }
  })
})



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


const clock = document.getElementById('clock');
setInterval(function (){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);


































