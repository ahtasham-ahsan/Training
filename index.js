// arrays, map, filter,reduce

const arr = [1,2,3,4,3,2,1]
const new_Arr = []
const arrr = arr.forEach((num) => {
    new_Arr.push(num * num);
})
console.log("For Each Array ==> ", new_Arr);


// map
const mapped_Array = arr.map((num) => { return num * (num/2)});
console.log("Mapped Array ==> ",mapped_Array);

// filter
const filtered_Array = arr.filter((num) => {
    return num>3;
});

console.log("Filtered Array ==> ", filtered_Array);

const filterArray = arr.filter(num=>num>2)

// Reduce
const reduced_arr = arr.reduce((accumulator, num) =>{
    return accumulator+num;
})

console.log(reduced_arr);
