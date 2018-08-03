var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function() {
    e.target.classList.remove("animate");
  }, 700);
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

function engage() {
  // sleep(1000);
  // var music = new Audio("/audio/Flash1.mp3");
  // music.play();

 

  let monsterArr = document.querySelectorAll("monsterArr").value;
  let player1_Name = document.getElementById("monsterPlayer1_name").value;
  let player1_health = document.getElementById("monsterPlayer1_health").value;
  let player1_element = document.getElementById("monsterPlayer1_element").value;
  let player1_attack = document.getElementById("monsterPlayer1_attack").value;
  let player1_speed = document.getElementById("monsterPlayer1_speed").value;
  let player1_effect = document.getElementById("monsterPlayer1_effect").value;

  let player2_Name = document.getElementById("monsterPlayer2_name").value;
  let player2_health = document.getElementById("monsterPlayer2_health").value;
  let player2_element = document.getElementById("monsterPlayer2_element").value;
  let player2_attack = document.getElementById("monsterPlayer2_attack").value;
  let player2_speed = document.getElementById("monsterPlayer2_speed").value;
  let player2_effect = document.getElementById("monsterPlayer2_effect").value;

  let attackButton = document.getElementById("attack");

  // console.log(monsterArr);

  let currentHealth1 = player1_health;
  let currentHealth2 = player2_health;

  var frameHeight = 102;
  var frames = 15;
  var frame = 0;
  var div = document.getElementById("animation");

  var interval = setInterval(function battle() {

    
    function calculateHealth_1() {
      return (currentHealth1 / player1_health) * 100;
    }

    function calculateHealth_2() {
      return (currentHealth2 / player2_health) * 100;
    }

    function setCurrentHealth_1() {
      document.getElementById("monster_player1").style.width =
        calculateHealth_1() + "%";
      return;
    }

    function setCurrentHealth_2() {
      document.getElementById("monster_player2").style.width =
        calculateHealth_2() + "%";
      return;
    }

    if (currentHealth2 > 0) {
      currentHealth2 -= player1_attack;
      setCurrentHealth_2();
 
    }

    if (currentHealth1 > 0) {
      currentHealth1 -= player2_attack;
      setCurrentHealth_1();
     
    }

    if (currentHealth2 < 0 && currentHealth1 < 0) {
      currentHealth1 = 0;
      currentHealth2 = 0;
      alert(`draw !`);

      $(document).ready(function() {
        $("#plsme1").fadeOut(500); // 5 seconds x 1000 milisec = 5000 milisec
        clearInterval(interval);
      });

      $(document).ready(function() {
        $("#plsme2").fadeOut(500); // 5 seconds x 1000 milisec = 5000 milisec
        clearInterval(interval);
      });
    }

    if (currentHealth1 < 0) {
      currentHealth1 = 0;

      $(document).ready(function() {
        alert(`${player2_Name} win !`);
        $("#plsme1").fadeOut(1000); // 5 seconds x 1000 milisec = 5000 milisec
        clearInterval(interval);

        window.prompt("play again", "you gain 1000 gil!!");
        location.href = "/";
      });
    }

    if (currentHealth2 < 0) {
      currentHealth2 = 0;
      $(document).ready(function() {
        alert(`${player1_Name} win !`);
        $("#plsme2").fadeOut(1000); // 5 seconds x 1000 milisec = 5000 milisec
        clearInterval(interval);
        // alert(currentHealth2);

        window.prompt("play again", "you gain 1000 gil!!");
        location.href = "/";
      });
    }
  }, 300);
}