// try catch
function fail(){
    try {
        console.log('Not an error', a);
    } catch (error) {
        console.log('Error happened', error);
    } finally{
        console.log('Maa tu run hu gaa ');
        
    }
}
fail()

// try catch does not work with the asyn code.