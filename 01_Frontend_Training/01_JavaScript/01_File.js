let experience = false;

function changeExperience() {
    let experience = true;
    console.log("Inside Experience", experience);
}

changeExperience();
console.log("Outside Experience", experience); 

const DontChange = "Cant Change";
console.log(DontChange);

