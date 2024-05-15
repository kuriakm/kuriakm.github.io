// Toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    // console.log("Check");  Check button function
    document.getElementById("nav-ul").classList.toggle("hide-small");
    // Can use columns for getElementById if applicable to all columns
    // classList.toggle turns hide-small into a toggable class element
};

// Arrows
// Variables
let ballLeft = 0;
let ballTop = 0;

// Main function to update ball position
const moveBall = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--ball-left", ballLeft + "px");
    root.style.setProperty("--ball-top", ballTop + "px");
}

// Moving to the right
document.getElementById("right-arrow").onclick = () => {
    // console.log("Check"); Check arrow function
    ballLeft += 10;
    moveBall();
    // console.log(root.style.getPropertyValue("--ball-left")); Outputs current value of --ball-left
}

// Moving to the left
document.getElementById("left-arrow").onclick = () => {
    // console.log("Check");  Check arrow function
    ballLeft -= 10;
    moveBall();
}

// Moving down
document.getElementById("bottom-arrow").onclick = () => {
    // console.log("Check");  Check arrow function
    ballTop += 10;
    moveBall();
}

// Moving up
document.getElementById("top-arrow").onclick = () => {
    // console.log("Check"); Check arrow function
    ballTop -= 10;
    moveBall();
}

/* Color Mood Message Generator */
document.getElementById("txt-color").onkeyup = e => {
    /* 
        console.log("hi");
        const color = document.getElementById("txt-color").value;
        console.log(color);
    */
    const color = e.currentTarget.value.toLowerCase();
    // The element that provoked the keypress is the textbox
    const messageP = document.getElementById("color-message");
    // messageP.innerHTML = color;
    if (color == "red") {
        messageP.innerHTML = "You are angry! (>O<)";
        messageP.style.color = "red";
    } else if (color == "blue") {
        messageP.innerHTML = "You are moody (o~o)";
        messageP.style.color = "blue";
    } else {
        messageP.innerHTML = "We don't know what you are";
        messageP.style.color = "black";
    }
}