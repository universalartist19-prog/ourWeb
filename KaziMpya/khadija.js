 // #comm = communication skill
const skill = document.querySelector("#comm");

// #text = communication details
const maelezo = document.querySelector("#text");

skill.addEventListener("click", function(){
    maelezo.classList.toggle("commu");
});

// #prog = programming skill
const skills = document.querySelector("#prog");

// #tex = programming details
const detail = document.querySelector("#tex");

skills.addEventListener("click", function(){
    detail.classList.toggle("short");
});

// #themeBtn = dark/light mode button
const button = document.querySelector("#themeBtn");

button.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        button.textContent = "Light-mode";
    }
    else{
        button.textContent = "Dark-mode";
    }
});

// #scroll = scroll-to-top button
const scroll = document.querySelector("#scroll");

scroll.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

window.addEventListener("scroll", function(){
if(window.scrollY > 200){
scroll.classList.remove("hidden");
}
else{
scroll.classList.add("hidden");
}
});

// .gallery = gallery images
const images = document.querySelectorAll(".gallery");

// #lightbox = image preview container
const lightbox = document.querySelector("#lightbox");

// #lightboximg = enlarged image
const lightboximg = document.querySelector("#lightboximg");

// #exitBtn = close lightbox button
const exitBtn = document.querySelector("#exitBtn");

images.forEach(function(img){

img.addEventListener("click", function(){
lightbox.classList.remove("hidde");
lightboximg.src = img.src;
});
});

exitBtn.addEventListener("click", function(){
lightbox.classList.add("hidde")
});

let welcome = "Welcome to my website!😊";
let index = 0;

function typewriter(){

    // #welcome = typing effect text area
    document.querySelector("#welcome").textContent +=
    welcome[index];

    index++;

    if(index === welcome.length){
        clearInterval(timer);
    }
}

let timer = setInterval(typewriter, 150);

// #Btn = show more/show less button
const Btn = document.querySelector("#Btn");

// #hobby1 = hidden hobby content
const hobby1 = document.querySelector("#hobby1");

Btn.addEventListener("click", function(){
hobby1.classList.toggle("more");

if(hobby1.classList.contains("more")){
    Btn.textContent = "Show more";
}
else{
    Btn.textContent = "Show less";
}
});

// #sortBtn = sort button
const sortBtn = document.querySelector("#sortBtn");

// #sortType = asc/desc selector
const sortType = document.querySelector("#sortType");

// #eduTable = education table
const eduTable = document.querySelector("#eduTable");

sortBtn.addEventListener("click", function(){
sortType.classList.toggle("sortHidden");
});

// #asc = ascending option
const asc = document.querySelector("#asc");

sortBtn.addEventListener("click", function(){

let rows = Array.from(eduTable.rows).slice(1);

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

rows.forEach(function(row){
    eduTable.appendChild(row);
});

});