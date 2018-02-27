//set variables for each crystal
$(document).ready(function () {
    console.log("ready!");


    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;


    //now set score variables


    var wins = 0;
    var losses = 0;
    
    var playerNum = 0;


    var startScore = Math.floor((Math.random() * 100) + 19);

    //Make a function to begin the game and set all the values
    function gameStart() {


        console.log(startScore);
        $("#number").text(startScore);

        //randomize each number for each jewel so they aren't all the same
        var randomGemNum1 = Math.floor((Math.random() * 10) + 3);

        var randomGemNum2 = Math.floor((Math.random() * 9) + 4);

        var randomGemNum3 = Math.floor((Math.random() * 8) + 5);

        var randomGemNum4 = Math.floor((Math.random() * 3 * 3) + 4);


        gem1 = randomGemNum1;
        gem2 = randomGemNum2;
        gem3 = randomGemNum3;
        gem4 = randomGemNum4;
    }

    function reset(){
        $("#number").text(startScore);
        

    }
   




    //run the start function
    gameStart();

    //give each image a random value
    $('#ruby').attr("data-sc", gem1);
    console.log($('#ruby').data("sc"));
    $('#diamond').attr("data-sc", gem2);
    console.log($('#diamond').data("sc"));
    $('#emerald').attr("data-sc", gem3);
    console.log($('#emerald').data("sc"));
    $('#sapphire').attr("data-sc", gem4);
    console.log($('#sapphire').data("sc"));

   
    //do something when i click a jewel
    $('.jewel').on('click', function () {

        //grab the value of the jewel 
        var num1 = parseInt($(this).data("sc"), 10);

        //display the value and add it to current score
        playerNum = ((playerNum + num1)*1);
        $('#score').html("<h1>Score: </h1>" + playerNum);

       //if the player matches the score, then add 1 to wins
        if (playerNum === startScore) {
            wins++;
            document.querySelector('#win').innerHTML = ("<h2>Wins: </h2>" + wins);
            alert("Winner Winner!");
            reset();
        //if player doesnt reach the score, then add 1 to the losses
        } else if (playerNum > startScore) {
            losses++;
            document.querySelector('#loss').innerHTML = ("<h3>Losses: </h3>" + losses);
            alert("Sorry, you didn't match the score");
            reset();

        };
    });

    
    


    

});