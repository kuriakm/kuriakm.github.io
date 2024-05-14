/* alert("\"Hello World\""); */ /* Popup message "Hello World" */

/* 
Variables
Java: int x = 4; // Strictly typed language
JavaScript: var x = 4; // Loosely typed language
    - Old standard

JavaScript: let name = "Jen";
    - New standard
    - Scoped variable

JavaScript: const name = "Jen";
    - Java final equivalent
    - Always use const (unless you have to change it; ex. for-loops)
*/

/* Functions at the top, calling code underneath */

let item = "data"; // Outside of function scope

// FIRST COLUMN

// Version 1 Function
/* function sayHello() {
    console.log("Hi me!");
}
 */

// Version 2 Function
/* const sayHello = function () {
    console.log("Hi");
} */

// Version 3 Function (Latest convention)
const sayHello = () => {
    /* console.log("HI"); */
    const messageP = document.getElementById("message");
    messageP.innerHTML = "HELLO";
}

// SECOND COLUMN
const styleMe = () => {
    console.log("Check"); // Check button function
    const messageF = document.getElementById("fun-message");
    messageF.classList.add("fun"); // messageF.className overwrites CSS

}

// THIRD COLUMN
const hideCat = () => {
    console.log("Check"); // Check button function
    document.getElementById("pic").classList.add("hidden");
}

// FOURTH COLUMN

// Version 1
/* const showRainbow = () => {
    console.log("Check"); // Check button function
    document.getElementById("item").classList.add("rainbow");
} */

// Version 1
/* const helloButton = document.getElementById("btn-hi"); // Get btn-hi object from index.html and set to helloButton in script.js
console.log("Hello Marshall");  // System.out.println
helloButton.onclick = sayHello;  // Remove parentheses; parentheses executes code immediately */

// Version 2 (shortest convention)
document.getElementById("btn-hi").onclick = sayHello;

// SECOND COLUMN
document.getElementById("btn-style").onclick = styleMe;

// THIRD COLUMN
document.getElementById("pic").onclick = hideCat;

//FOURTH COLUMN
document.getElementById("btn-rainbow").onclick = () => {
    console.log("Check"); // Check button function
    document.getElementById("item").classList.add("rainbow");
};

// FIFTH COLUMN
document.getElementById("slider").oninput = () => {
    const val = document.getElementById("slider").value;
    document.getElementById("slide-val").innerHTML = val;
    /* document.getElementById("myBtn").style.left = "100px";  from W3Schools*/
}