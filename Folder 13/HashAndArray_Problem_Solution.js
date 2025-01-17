function first_recurring_number(inp){
    for (let i = 0; i < inp.length; i++) {
        for (let j = i+1; j < inp.length; j++) {
            if(inp[i] === inp[j]){
                return inp[i];
            }
        }
    }
    return undefined;
}

console.log('COmplexity --> O(N^2)', first_recurring_number([1,2,1,3,4,2,1,3]));

function first_recurring_number2(inp){
    let map = {};
    for (let i = 0; i < inp.length; i++) {
        if(map[inp[i]] !== undefined){
            return inp[i];
        }        
        else{
            map[inp[i]] = i;
        }
    }
    return undefined;
}

console.log('COmplexity --> O(N)', first_recurring_number2([3,2,1,3,4,2,1,3]));
