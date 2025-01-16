// .catch is used to catch errors in asyncronize functions
Promise.resolve('Promise here...')
    .then((res)=>{
        console.log(res);
        return res;
    })
    .then((res) => {
        console.log(res);
    })
    .catch(err => console.log(err))