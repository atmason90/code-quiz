
var scores = document.querySelector("#scores");
var clearScores = document.querySelector("#clear-scores");
var backButton = document.querySelector("#back-button");

clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        scores.appendChild(createLi);
    }
}

backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
});