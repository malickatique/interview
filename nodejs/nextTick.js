
// Difficulty Level: 5/10
// Max Time Limit: 4 minutes

// Task: What will be the output of the following code and why?

setImmediate(function A() {
    console.log("the lone wolf dies");
});
  
setImmediate(function B() {
    console.log("and white winds blow");
});
  
process.nextTick(function C() {
    console.log("When the snows fall");
});
  
process.nextTick(function D() {
    console.log("but the pack survives");
});
  
// First event queue ends here
console.log("Show ends");


// Output: ?





























// Ans: Program ends When the snows fall and white winds blow, the lone wolf dies but the pack survives.