function highscore() {
    // Corrected variable name to use

    var scores = {}; try {
        scores = JSON.parse(window.localStorage.getItem('highScore') || '{}');
      } catch(err) {
        scores = {};
      };
  
     scores.initials = scores.initials || [];
     scores.score = scores.score || [];

     console.log(scores);



    for (var i = 0; i < scores.initials.length; i++) {
        var li = document.createElement("li");

        li.textContent = scores.initials[i] + " " +  scores.score[i];

        console.log(scores.initials[i])
        console.log(scores.score[i])

        // // Assuming you want to append the list item to an element with id 'score-list'
        document.getElementById('highscores').appendChild(li);

    }
}


// Corrected function name to resetHighscore
function resetHighscore() {
    localStorage.removeItem("highScore");
    // Assuming you want to refresh the displayed scores after resetting
    highscore();
}

// Call highscore function to display scores
highscore();
