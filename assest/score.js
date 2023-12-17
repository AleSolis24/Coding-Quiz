function highscore() {
    // stole this code
    var scoredBoard = JSON.parse(localStorage.getItem("highScore"))
    if (!scoredBoard) {
        var scoredBoard = {
            initals: [],
            score: []
        }
    }
    for (var i = 0; i < userScoresObject.initial.length; i++) {
        var li = document.createElement("li");
        li.textContent = "scores: " + userScoresObject.initial[i] + " " +  userScoresObject.score[i]
    }
};

// this is allowing the user to reset there highscore
function restHighscore () {
    window.location.reload();
};

highscore();