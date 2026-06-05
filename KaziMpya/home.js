
//declaration of a string greet and index starts from.
const greet = "Welcome to Our Group Website!";
let index = 0;

function typeWriter(){
document.querySelector("#welcome").textContent +=
 greet[index];
    index++;
//clearing the setInterval function
if(index === greet.length){
    clearInterval(timer);
}
}
//variable timer for setInterval
let timer = setInterval(typeWriter, 200);

