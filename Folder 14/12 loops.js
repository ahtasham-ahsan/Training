
var database = [
    {
        username: 'Sara', 
        password: '202'
    },
    {
        username: 'Bilal', 
        password: '2222'
    },
    {
        username: 'Khan', 
        password: '213'
    }
]

function isUserValid(username, password){
    for (let i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password){
            console.log("signed in successfully");
            return true    
        }        
    }
    return false
}

function signIn(username, password) {
    if(isUserValid(username, password)){
        alert("Signed in Successfully");
    }
    else{
        alert("Invalid Username or Password")
    }
    
}
signIn('Sara', '2020')