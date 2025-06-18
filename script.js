// JavaScript goes here.
// my buttons
let east = document.querySelector("#east-btn")
let West = document.querySelector("#west-btn")
let Yellow = document.querySelector("#yellow-btn")
let Blue = document.querySelector("#blue-btn")
let minor = document.querySelector("#minor");
let adult = document.querySelector("#adult");
let start = document.querySelector("#start-btn");

//my screen
let question3 = document.querySelector(".question3");
let question2 = document.querySelector(".question2")
let question1 = document.querySelector(".question1")
let results = document.querySelector(".result")
let startScreen = document.querySelector(".start-screen")

//Allows to differentiate endings
let selectedDirection = "";

//changes end screen picture
let image = document.querySelector("#result-img");

// Allows picture to appear in ending
let ending = document.querySelector(".text");

// removes box at the end screen
let question = document.querySelector(".questions");

// to change background color
let body = document.querySelector("body");


start.addEventListener("click", function() {
    console.log("start");
    startScreen.style.display = "none";
    question3.style.display = "block";
    question.style.display = "block";
    question1.style.display = "none";
    question2.style.display = "none";
});


minor.addEventListener("click", function() {
    question1.style.display = "block";
    question3.style.display = "none";
});

adult.addEventListener("click", function() {
    question1.style.display = "block";
    question3.style.display = "none";
});

east.addEventListener('click', function() {
    question2.style.display = "block";
    question1.style.display = "none";
    selectedDirection = "east";
});

West.addEventListener("click", function() {
    question2.style.display = "block";
    question1.style.display = "none";
    selectedDirection = "west";
});

Yellow.addEventListener("click", function() {
    question2.style.display = "none";
    question.style.display = "none";
    results.style.display = "block";
    if (selectedDirection == "east") {
        ending.innerHTML = "Your basketball team is Pacers";
        image.src = "download (1).png";
        image.alt = "Pacers Logo";
        body.style.backgroundColor = "gold";
    }
    else if (selectedDirection == "west") {
        ending.innerHTML = "Your basketball team is Lakers";
        image.src = "download (3).png";
        image.alt = "Lakers Logo";
        body.style.backgroundColor = "blue";
    }
});

Blue.addEventListener("click", function() {
    question2.style.display = "none";
    question.style.display = "none";
    results.style.display = "block";
    if (selectedDirection === "east") {
        ending.innerHTML = "Your basketball team is Knicks";
        image.src = "download (4).png";
        image.alt = "Knicks Logo";
        body.style.backgroundColor = "#000080";

    }
    else if (selectedDirection == "west") {
        ending.innerHTML = "Your basketball team is Thunders";
        image.src = "download (5).png";
        image.alt = "Thunders Logo";
        body.style.backgroundColor = "blue";
    }
});


