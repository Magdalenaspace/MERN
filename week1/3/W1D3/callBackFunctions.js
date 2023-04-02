// function that is passed into another function to be called by that function.
setTimeout( function() { 
        console.log("start") 
    }, 3000 );
        
    console.log("end");
//expects 2 parameters
//1 function(whatever code we want to run after the delay)
//2 number(represents the delay in milliseconds)

//A callback function is a function that is passed as 
//an argument to another function, and is executed inside the other function.
// It is a way of passing functionality around, 
//allowing functions to be used as values.
// Callback functions are often used in asynchronous programming,
// where they can be used to respond to events or to process data returned from a remote server.

function addNumbers(a, b, callback) {
    var result = a + b;
    callback(result);
    }
    
    function printResult(result) {
        console.log(result);
    }
    
    addNumbers(3, 5, printResult); // prints 8
// ---------------------------------------------------------------------------------------

typeof( "hello" ); //""
typeof( function() {} ); //function

var exampleFunction = function(message){
    console.log( message );
    };
        
    exampleFunction( "Hello from exampleFunction" );

    function parentFunction( callback ) {
        callback( "information from the parent function" );
    }

    parentFunction( exampleFunction );
//These sort of functions are often used with anonymous functions (functions without a name)
    parentFunction( function(message) {
        console.log( message );
    });