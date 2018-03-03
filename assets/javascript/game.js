
var wins = 0;
var losses = 0;
var guessesLeft = 10;//-=
var guessesSoFar = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
var userGuess = null;


document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
            guessesSoFar[guessesSoFar.length]=userGuess;
            guessesLeft--;
        }

       if (letter === userGuess) {
            wins++;
            console.log("You won!");
            guessesLeft = 10;
            guessesSoFar = [];
            letter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letter);
        }

        if (guessesLeft === 0) {
            losses++;
            console.log("You lost!");
            guessesLeft = 10;
            guessesSoFar = [];
            letter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letter);
        }


        var html = "<p><h1>The Psychic Game</h1></p>" +
            "<p><img src=\"assets/images/psychic.jpg\"></p>" +
            "<div id='text'><p><h4>Guess what letter I'm thinking of</h4></p>" +
            "<p><h4>Wins: " + wins + "</h4></p>" +
            "<p><h4>Losses: " + losses + "</h4></p>" +
            "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" +
            "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p></div>";

        document.querySelector("#game").innerHTML = html;

    };

    function myFunction() {
    var x = document.getElementById("psychic.jpg").src;
    document.getElementById("pic").innerHTML = x;
    }

    function myFunction() {
    var x = document.getElementsByTagName("STYLE")[0];
    document.getElementById("text").innerHTML = x.innerHTML;
    }










