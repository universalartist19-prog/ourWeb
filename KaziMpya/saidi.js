 // Make programming skill clickable
const skills =
 document.querySelector("#prog");

const detail =
 document.querySelector("#tex");

// Show/hide programming details
skills.addEventListener("click", function(){
    detail.classList.toggle("short");
});

const button = document.querySelector("#themeBtn");

// Change website theme
button.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        button.textContent = "Light-mode";
    }
    else{
        button.textContent = "Dark-mode";
    }
});

const scroll = document.querySelector("#scroll");

// Scroll to top
scroll.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

// Show scroll button after scrolling
window.addEventListener("scroll", function(){
if(window.scrollY > 200){
scroll.classList.remove("hidden");
}
else{
scroll.classList.add("hidden");
}
});

const images = document.querySelectorAll(".gallery");
const lightbox = document.querySelector("#lightbox");
const lightboximg = document.querySelector("#lightboximg");
const exitBtn = document.querySelector("#exitBtn");

// Open image preview
images.forEach(function(img){

img.addEventListener("click", function(){
lightbox.classList.remove("hidde");
lightboximg.src = img.src;
});
});

// Close image preview
exitBtn.addEventListener("click", function(){
lightbox.classList.add("hidde")
});

const Btn = document.querySelector("#Btn");
const hobbies = document.querySelector("#hobbies");

// Show more / Show less hobbies
Btn.addEventListener("click", function(){
hobbies.classList.toggle("showMore");

if(hobbies.classList.contains("showMore")){
    Btn.textContent = "Show less";
}
else{
    Btn.textContent = "Show more";
}
});

const sortBtn = document.querySelector("#sortBtn");
const sortType = document.querySelector("#sortType");
const eduTable = document.querySelector("#eduTable");

// Display sort options
sortBtn.addEventListener("click", function(){
sortType.classList.toggle("sortHidden");
});

const asc = document.querySelector("#asc");

// Sort table when option changes
sortType.addEventListener("change", function(){

let rows =
Array.from(eduTable.rows).slice(1);

rows.sort(function(a, b){

let yearA = parseInt(a.cells[2].textContent);
let yearB = parseInt(b.cells[2].textContent);

if(sortType.value === "asc"){
return yearA - yearB;
}
else{
return yearB - yearA;
}

});

// Reinsert sorted rows
rows.forEach(function(row){
    eduTable.appendChild(row);
});

});