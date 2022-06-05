

// Process Execution
setInterval(() => 
{
    console.log(" I am consuming CPU!! ", count++ );
}, 1000);

var singleton = {
    timer,
    method1: function () {
      // ...
    },
    method2: function () {
      // ...
    }
};