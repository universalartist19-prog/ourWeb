 // Stopwatch display element
const display = document.getElementById("display");

// Variables used to control the stopwatch
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the stopwatch
function start(){
if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
}
}

// Stop/pause the stopwatch
function stop(){
if(isRunning){
   clearInterval(timer);
   elapsedTime = Date.now() - startTime;
   isRunning = false;
}
}

// Reset stopwatch to zero
function reset(){
   clearInterval(timer);
   startTime = 0;
   elapsedTime = 0;
   isRunning = false;
   display.textContent = `00:00:00:00`;
}

// Update stopwatch display
function update(){

const currentTime = Date.now();
elapsedTime = currentTime - startTime;

// Calculate hours
let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
hours = String(hours).padStart(2, "0");

// Calculate minutes
let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
minutes = String(minutes).padStart(2, "0");

// Calculate seconds
let seconds = Math.floor(elapsedTime / 1000 % 60);
seconds = String(seconds).padStart(2, "0");

// Calculate milliseconds
let milliseconds = Math.floor(elapsedTime % 1000 / 10);
milliseconds = String(milliseconds).padStart(2, "0");

// Display formatted time
display.textContent =
`${hours}:${minutes}:${seconds}:${milliseconds}`;

}