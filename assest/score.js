function highscore() {
    
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

        
        document.getElementById('highscores').appendChild(li);

    }
}


//this allows the user to reset there score by removing there local storage data 
function resetHighscore() {
    localStorage.removeItem("highScore");
   
    highscore();
}

highscore();
