function throttle(func, delay) {
    let inThrottle = false;
  
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
  
        setTimeout(() => {
          inThrottle = false;
        }, delay);
      }
    };
  }
  
  const throttledFn = throttle(() => console.log("Called"), 2000);
  
  throttledFn(); 
  throttledFn(); 
  setTimeout(throttledFn, 3000); 
  