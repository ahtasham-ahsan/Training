function reverse_String(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Cant Perform the Operation';
    }
    const Backward_Array = [];
    const total_items = str.length - 1;
    for(let i = total_items; i >= 0; i--){
        Backward_Array.push(str[i]);
    }
    console.log(Backward_Array);
    
    return Backward_Array.join('');
}

console.log(reverse_String('Hello Peter, I hope you doing great'));
console.log(reverse_String('H'));

function reverse_String2(str){
    return str.split('').reverse().join('');
}
console.log(reverse_String2('Hello Peter, I hope you doing great'));

const reverse_String3 = str => str.split('').reverse().join('');

console.log(reverse_String3('Hello Peter, I hope you doing great'));


const reverse_String4 = str => [...str].reverse().join('');

console.log(reverse_String4('Hello Peter, I hope you doing great'));

