const MAX_LENGTH = 12;
let button = document.querySelectorAll(".num-btn");
let display = document.getElementById("display");
button.forEach(function(button){button.addEventListener("click", function(){
if(display.innerText.length < MAX_LENGTH){
display.innerText += button.textContent;}});}
);

const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
display.innerText = "";}
);

const del = document.getElementById("backspace");
del.addEventListener("click", function(){
display.innerText = display.innerText.slice(0,-1);}
);

const answer = document.getElementById("answer");
answer.addEventListener("click", function(){
let expression = display.innerText.replace(/÷/g,"/")
                                  .replace(/×/g, "*");
try{display.innerText = eval(expression);}
	catch{display.innerText = "ERROR!";} 
}
);
