
setTimeout(() => {
    console.log("Timer")
}, 3000);

function x(y: Function){
    console.log("x");
    y();
}
function y(){
    console.log("callback function called")
}
x(y);
function delay(ms) : Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Usage
  delay(2000).then(() => console.log("Resolved after 2 seconds"));
  
async function waitForTime(): Promise<void>{
    await delay(5000);
    console.log("Async waiting for SetTimeout")
}
waitForTime()

function createPromise(delay: number, name: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} resolved at ${delay} seconds`);
        resolve(name);
      }, delay * 1000);
    });
  }
  
  console.log("Execution started");
  
  createPromise(5, "First Promise") // Resolves after 5 seconds
    .then(() => createPromise(2, "Second Promise")) // Starts after first, resolves at 7s
    .then(() => createPromise(3, "Third Promise")); // Starts after second, resolves at 10s
  
