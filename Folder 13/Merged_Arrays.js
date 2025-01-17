function Merged_Array(arr1, arr2){
    const mergedArray = [];
    let array1_Items = arr1[0];
    let array2_Items = arr2[0];
    let i = 1;
    let j = 1;
    // Check Input
    if(arr1.length == 0){
        return arr2;
    }
    else if(arr2.length == 0){
        return arr1;
    }

    while(array1_Items || array2_Items){
        // console.log(array1_Items, array2_Items);
        
        if(!array2_Items || array1_Items< array2_Items){
            mergedArray.push(array1_Items);
            array1_Items = arr1[i];
            i++;
        }
        else{
            mergedArray.push(array2_Items);
            array2_Items = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(Merged_Array([0,3,5], [1,2,6,10]));
