// Immutability

const obj = {
    name: 'Sarah'
}

function clone(object_to_clone){
    return {...object_to_clone}
}

function update_Name(obj, name){
    const new_Object = clone(obj);
    new_Object.name = name;
    return new_Object;
}

console.log(update_Name(obj, 'Sarah Daniel'));
console.log(obj);

