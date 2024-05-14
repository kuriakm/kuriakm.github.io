// Counter
let clicks = 0; // Initial count value 

document.getElementById("counter").onclick = () => {
    console.log("Check"); // Check click function
    clicks += 1;
    document.getElementById("clicker").innerHTML = clicks;
};

// Random picture
document.getElementById("rand-pic").onclick = () => {
    console.log("Check"); // Check click function
    window.location.reload(); //
}

// Slider
document.getElementById("slider").value = 0; // Initial value of slider

document.getElementById("slider").oninput = () => {
    console.log("Check"); // Check input function
    val = document.getElementById("slider").value * 1.25;
    document.getElementById("box-section").style.left = val + "px";
}