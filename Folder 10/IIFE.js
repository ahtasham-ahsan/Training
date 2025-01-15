// GLOBAL SCOPE
    // MODULE SCOPE
        // FUNCTION SCOPE
            // BLOCK SCOPE LET AND CONST 

// IIFE
var fightModule = (
    function(){
        var harry = 'potter';
        var ogre = 'petter';
        
        function fight(char1, char2){
            var attack1 = Math.floor(Math.random() * char1.length)
            var attack2 = Math.floor(Math.random() * char2.length)
            return attack1 > attack2 ?  `${char1} wins ` : `${char2} wins`
        }
        return {
            fight:fight
        }
    }
)()

console.log(fightModule.fight('ali', 'abid'));
