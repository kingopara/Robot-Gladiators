var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
        //ask player if they'd like to fight or run
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                //subtract money from player money for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died! ");

            //award player money for winning
            playerMoney = playerMoney + 20;
            //leave while() loop since enemy is dead
            break;
        }   
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining");

        //check player's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died. ");
            //leave while () loop if player is dead
            break;
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
            }  
        
            // if no (false), ask question again by running fight() again
           // else {
           //     fight();
            //}

           // window.alert(playerName + " has chosen to skip the fight!");
        //} else {
          //  window.alert("You need to choose a valid option. Try again!");
        //}
        // fight function statements
    }
};
// fight();

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    //debugger;
    enemyHealth = 50;
    //call fight function with enemy-robot
    fight(pickedEnemyName);
    
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
}

// You can also log multiple values at once like this 
//console.log(playerName, playerAttack, playerHealth);
 
//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);