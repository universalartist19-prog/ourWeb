// Select the communication skill element
const skill =
 document.querySelector("#comm");

// Select the communication description text
const maelezo =
 document.querySelector("#text");

// Toggle communication description visibility when clicked
skill.addEventListener("click", function(){
    maelezo.classList.toggle("commu");
});

// Make communication clickable
const skills =
 document.querySelector("#prog");

// Select programming description text
const detail =
 document.querySelector("#tex");

// Toggle programming description visibility when clicked
skills.addEventListener("click", function(){
    detail.classList.toggle("short");
});

// Select dark/light mode button
const button = document.querySelector("#themeBtn");

// Switch between dark mode and light mode
button.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");

    // Change button text depending on current theme
    if(document.body.classList.contains("dark-theme")){
        button.textContent = "Light-mode";
    }
    else{
        button.textContent = "Dark-mode";
    }
});

// Select scroll-to-top button
const scroll = document.querySelector("#scroll");

// Smoothly scroll page back to the top
scroll.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

// Show or hide scroll button based on scroll position
window.addEventListener("scroll", function(){
if(window.scrollY > 200){
scroll.classList.remove("hidden");
}
else{
scroll.classList.add("hidden");
}
});

// Select all gallery images
const images = document.querySelectorAll(".gallery");

// Select lightbox container
const lightbox = document.querySelector("#lightbox");

// Select image displayed inside lightbox
const lightboximg = document.querySelector("#lightboximg");

// Select close button for lightbox
const exitBtn = document.querySelector("#exitBtn");

// Add click event to every gallery image
images.forEach(function(img){

img.addEventListener("click", function(){

// Show lightbox
lightbox.classList.remove("hidde");

// Display clicked image inside lightbox
lightboximg.src = img.src;
});
});

// Close lightbox when exit button is clicked
exitBtn.addEventListener("click", function(){
lightbox.classList.add("hidde")
});

// Message to display with typing effect
let welcome = "Welcome to my website!😊";

// Track current character position
let index = 0;

// Typewriter animation function
function typewriter(){

    // Add one character at a time
    document.querySelector("#welcome").textContent +=
    welcome[index];

    index++;

    // Stop typing when all characters are displayed
    if(index === welcome.length){
        clearInterval(timer);
    }
}

// Run typewriter effect every 150 milliseconds
let timer = setInterval(typewriter, 150);

// Select Show More/Show Less button
const Btn = document.querySelector("#Btn");

// Select hobby section
const hobby1 = document.querySelector("#hobby1");

// Toggle hobby section visibility
Btn.addEventListener("click", function(){
hobby1.classList.toggle("more");

// Change button text depending on visibility state
if(hobby1.classList.contains("more")){
    Btn.textContent = "Show more";
    }
    
    else{
        Btn.textContent = "Show less";
    }
});

// Select sort button
const sortBtn = document.querySelector("#sortBtn");

// Select sorting dropdown
const sortType = document.querySelector("#sortType");

// Select education table
const eduTable = document.querySelector("#eduTable");

// Show or hide sorting options
sortBtn.addEventListener("click", function(){
sortType.classList.toggle("sortHidden");
});

// Select ascending option
const asc =  document.querySelector("#asc");

// Sort table rows when sort button is clicked
sortBtn.addEventListener("click", function(){
    
// Get all rows except the header row
let rows = 
Array.from(eduTable.rows).slice(1);

// Sort rows based on year column
rows.sort(function(a, b){

let yearA = parseInt(a.cells[2].textContent);
let yearB = parseInt(b.cells[2].textContent);

// Ascending order
if(sortType.value === "asc"){
return yearA - yearB;
}

// Descending order
else{
    return yearB - yearA;
}

});

// Re-append sorted rows to the table
rows.forEach(function(row){
    eduTable.appendChild(row);
});

});