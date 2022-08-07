
 let num =  Math.floor(Math.random() * 100);;
let btn = document.getElementById("myBtn");

   
// btn eventlistener to change the advice
 
    btn.addEventListener('click',()=>{
        fetch(`https://api.adviceslip.com/advice/${num}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data.slip.advice)
           num = Math.floor(Math.random() * 100);
            let advice = data.slip.advice;
         document.getElementById('advice').innerHTML =  advice  ;
        })
    })
    