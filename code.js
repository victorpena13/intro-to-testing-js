// helloWorld function
function helloWorld(input) {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, " + input + "!";
//     } else if (input === "Pat") {
//         return "Hello, Pat!";
//     } else if (input === undefined") {
//         return "Hello, World!";
//     } else {
//         return "Hello, Jane!";
//     }
// }


function sayHello(input){
    if (input === true || input === false) {
        return "Hello, World!";
    } else if (input === undefined) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}


// // function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }

// function add(num1, num2) {
//     if (typeof num1 === "string" || typeof num2 === "string") {
//         return false;
//     } else {
//         return num1 + num2;
//     }
// }