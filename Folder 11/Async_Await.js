(async function name(params) {
    try {
        await Promise.reject('Oops');
    } catch (error) {
        console.log(error);
    }
    console.log('Final run');   
})()