

//function for updating clock
function updateClock(){
    //getting the current time 
    const now = new Date();
    let hours = now.getHours();
    //checking if its morning or aftenoon
   const meridiem =  hours >= 12? "PM": "AM";
   //sorting to 12 hours format
   hours = hours % 12 || 12;
   //making sure the time appear 2-digited i.e 08:50
   hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timestring = `${hours}:${minutes}:${seconds}${meridiem}`;
    //printing
document.getElementById("display").textContent = timestring;
}
//clearing setIInterval function
setInterval(updateClock, 1000);
