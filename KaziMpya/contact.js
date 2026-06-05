 // Select the contact form
const form = document.querySelector("#contactForm");

// Function to validate email format
function validateEmail(email){

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);
}

// Run validation when form is submitted
form.addEventListener("submit", function(event){

// Prevent page refresh
event.preventDefault();

// Clear previous error messages
document.querySelector("#nameError").textContent ="";
document.querySelector("#interestError").textContent ="";
document.querySelector("#emailError").textContent = "";
document.querySelector("#textError").textContent = "";
document.querySelector("#genderError").textContent = "";

// Get input values
const name =
document.querySelector("#name").value;

const email =
document.querySelector("#email").value;

const message =
document.querySelector("#message").value;

// Get selected gender
const gender =
document.querySelector(`input[name="gender"]:checked`);

// Get selected interest
const interest =
document.querySelector(`input[type="checkbox"]:checked`);

// Validate name
if(name === ""){
    document.querySelector("#nameError").textContent =
    "Name is required";
}

// Validate email
if(email === ""){
    document.querySelector("#emailError").textContent =
    "Email is required";
}
else if(!validateEmail(email)){
    document.querySelector("#emailError").textContent =
    "Invalid email";
}

// Validate message
if(message === ""){
    document.querySelector("#textError").textContent =
    "Please write some message";
}

// Validate gender selection
if(!gender){
    document.querySelector("#genderError").textContent =
    "Gender is required";
}

// Validate interest selection
if(!interest){
    document.querySelector("#interestError").textContent =
    "Select at least one interest";
}

});