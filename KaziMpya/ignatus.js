const skill =
 document.querySelector("#comm");
const maelezo =
 document.querySelector("#text");

skill.addEventListener("click", function(){
    maelezo.classList.toggle("commu");
});
//Make communication clickable
const skills =
 document.querySelector("#prog");

 const detail =
 document.querySelector("#tex");

 skills.addEventListener("click", function(){
    detail.classList.toggle("short");
});

const button = document.querySelector("#themeBtn");

//adding event listener to a button so it can perfom dark mode/ white mode
button.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
//checking if body contain class dark theme

    if(document.body.classList.contains("dark-theme")){
          //changing the text contents of buttons accordingly
        button.textContent = "Light-mode";
    }
    else{button.textContent = "Dark-mode";}
});
//assigning scroll element to a variable scroll
const scroll = document.querySelector("#scroll");
//setting event listener to a click of x 
scroll.addEventListener("click", function(){
        //direction to where it should behave 

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
//adding event listener to a scroll element
window.addEventListener("scroll", function(){
if(window.scrollY > 200){
      //removing/ adding class to add and remove the function of x element
scroll.classList.remove("hidden");
}
else{scroll.classList.add("hidden");
}
});
//declaring image variable
const images = document.querySelectorAll(".gallery");
const lightbox = document.querySelector("#lightbox");
const lightboximg = document.querySelector("#lightboximg");
const exitBtn = document.querySelector("#exitBtn");

//put effect for all images
images.forEach(function(img){
img.addEventListener("click", function(){
lightbox.classList.remove("hidde");
//assigning the source file of image to lightboximg variable
lightboximg.src = img.src;
});
});

//adding listener to exit button (element x)
exitBtn.addEventListener("click", function(){
    //adding class to lightbox
lightbox.classList.add("hidde")
});

let welcome = "Welcome to my website!😊";
let index = 0;

function typewriter(){
    document.querySelector("#welcome").textContent +=
    welcome[index];
    index++;
    if(index === welcome.length){
        clearInterval(timer);
    }
}

let timer = setInterval(typewriter, 150);
//variable declaration and assigniment
const Btn = document.querySelector("#Btn");
const hobby1 = document.querySelector("#hobby1");

//adding event listener to a show more/ show less button
Btn.addEventListener("click", function(){
hobby1.classList.toggle("more");

//changing the text contents of buttons
if(hobby1.classList.contains("more")){
    Btn.textContent = "Show more";
    }
    
    else{
        Btn.textContent = "Show less";}
});
//variable declaration
const sortBtn = document.querySelector("#sortBtn");
const sortType = document.querySelector("#sortType");
const eduTable = document.querySelector("#eduTable");

//adding event listener to a variable button
sortBtn.addEventListener("click", function(){
sortType.classList.toggle("sortHidden");
});

const asc =  document.querySelector("#asc");

//Adding event listener to a sortBtn
sortBtn.addEventListener("click", function(){
    
      //declaration of rows variable and changing the values to string
let rows = 
Array.from(eduTable.rows).slice(1);
//sorting function
rows.sort(function(a, b){
//changing array values to intergers
let yearA = parseInt(a.cells[2].textContent);
let yearB =parseInt(b.cells[2].textContent);
//checking which element was clicked so it can respond accirdingly
if(sortType.value === "asc"){

return yearA - yearB;
}

else{
    return yearB - yearA;
}

});

//updating the rows (new rows)
rows.forEach(function(row){
    eduTable.appendChild(row);
});

});
