// Caching and Memozing
// if the parameters are not changing then the cached version is known as the memoized cache.
function memozied_add_to_80(){
    let cache = {}
    return function(n){
     if(n in cache){
         return cache[n];
     }
     else{
         console.log('Taking time to add to cache');
         cache[n] = n+80;
         return cache[n];
     }
    }
 }
 
 let memoized = memozied_add_to_80();
 console.log(memoized(80));
 console.log(memoized(80));
 console.log(memoized(80));
 console.log(memoized(120));
 console.log(memoized(10));