// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userchoice;
userchoice="";
var computerChoice;
computerChoice="";
var winner;
winner="";


$("#shoot").click(function() {
   var userchoice= $("#input").val() 
    $("#userchoice").text(userchoice)
   
    var randomNumber;
randomNumber=Math.random();
    console.log(randomNumber);
    if(randomNumber > .66) {
        computerChoice = "Rock"
    } else if (randomNumber > .33) {
        computerChoice = "Paper" 
    } else if (randomNumber > 0) {
        computerChoice = "Scissor"; 
};
$("#computerChoice").text(computerChoice)
});




// DOCUMENT READY FUNCTION BELOW

