// JavaScript goes here.
let East = document.querySelector("#east-btn")
let West = document.querySelector("#west-btn")
let Yellow = document.querySelector("#yellow-btn")
let Blue = document.querySelector("#blue-btn")
let question2 = document.querySelector(".question2")
let question1 = document.querySelector(".question1")
let results = document.querySelector(".result")
let selectedDirection = "";
let image = document.querySelector("#result-img");
let ending = document.querySelector(".text");
let question = document.querySelector(".questions");
let body = document.querySelector("body");

East.addEventListener('click', function() {
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


