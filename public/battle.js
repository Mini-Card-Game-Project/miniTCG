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
  var music = new Audio("/audio/Flash1.mp3");
  music.play();
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
   setTimeout(function() {
    while (currentHealth1 > 0) {
      currentHealth1 -= player1_attack;
      setCurrentHealth_1();
    }
     while (currentHealth2 > 0) {
      currentHealth2 -= player2_attack;
      setCurrentHealth_2();
    }
     if (currentHealth1 == 0) {
      $(document).ready(function() {
        $("#plsme1").fadeOut(3000); // 5 seconds x 1000 milisec = 5000 milisec
      });
       alert(currentHealth2);
      // trigger
      $("form#player1").submit(currentHealth2);
    }
     if (currentHealth2 == 0) {
      $(document).ready(function() {
        $("#plsme2").fadeOut(3000); // 5 seconds x 1000 milisec = 5000 milisec
      });
    }
  });
   // alert(setCurrentHealth_1())
   // alert('ss')
}
 // $("#id").
 {
  /* <embed src="/audio/NieR Automata OST - Memories of Dust (Dynamic - Vocals).mp3" width="180" height="90" loop="true" autostart="false"
hidden="true" />
 <embed src="/audio/Cant escape from crossing fate (without music).mp3" width="180" height="90" loop="true" autostart="false"
hidden="true" /> */
}