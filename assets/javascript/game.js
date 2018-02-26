//set variables for each crystal
$( document ).ready(function() {
    console.log( "ready!" );


var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;


//now set score variables


var wins = 0;
var losses = 0;
var userScore = 0;



//Make a function to begin the game and set all the values
function gameStart(){
    
    var startScore = Math.floor((Math.random()*100) + 19);
    console.log(startScore);
    $("#number").text(startScore);
    
        var randomGemNum1 = Math.floor((Math.random()*10)+3);
    
       var randomGemNum2 = Math.floor((Math.random()*9)+4);
   
        var randomGemNum3 = Math.floor((Math.random()*8)+5);

        var randomGemNum4 = Math.floor((Math.random()*3*3)+4);
    

    gem1 = randomGemNum1;
    gem2 = randomGemNum2;
    gem3 = randomGemNum3;
    gem4 = randomGemNum4;

    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
    console.log;

    $("#score").html("<h1>Current Score:</h1>"+ userScore);
    

    

   
}


//run the function
gameStart();



//create on click events for the images

//RUBY
$("#ruby").click(function() {
    $("#ruby").attr("value", gem1);
    
 });

//DIAMOND
$("#diamond").on("click", function(){
    $("#diamond").attr("value", gem2);
   
    
});

//SAPPHIRE
$("#sapphire").on("click", function(){
    $("#sapphire").attr("value", gem3);

});

//EMERALD
$("#emerald").on("click", function(){
    $("#emerald").attr("value", gem4);

});

});
    
