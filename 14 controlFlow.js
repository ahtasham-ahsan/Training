// terniary operators 
// condition ? expression 1 : expression 2

function isUserValid(bool){
    return bool;
}

var ans = isUserValid(true) ? "you may enter this" : "access denied";
console.log(ans);


//  Switch
function moveDirection(direction){
    var whatHappens;
    switch (direction) {
        case 'forward':
            whatHappens = 'Move forward to the super marker'
            break;
        case 'back':
            whatHappens = 'you arrived home'
            break;
        case 'right':
            whatHappens = 'Move to the river'
            break;
        case 'left':
            whatHappens = 'Move to the school'
            break;
        default:
            whatHappens = "Enter a valid direction"
            break;
    }
    return whatHappens;
}

var whereTo = moveDirection('back');
console.log(whereTo);
