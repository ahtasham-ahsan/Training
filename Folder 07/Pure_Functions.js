// Functional Programming 
let array = [1,2,3,4]
function mutateArray(arr){
    arr.pop();
}

mutateArray(array) // having side effect that even the function is not returning anything,
                    //  its still modifing the global
console.log(array)


// No side effect to the outer array
function remove_last_item(arr){
    const new_Array = [].concat(arr)
    new_Array.pop();
    return new_Array;
}
console.log(remove_last_item(array))
console.log(array);

