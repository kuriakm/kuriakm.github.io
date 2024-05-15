// Navigation toggle
document.getElementById("toggle").onclick = () => {
    document.getElementById("toggle").classList.toggle("triangle-up");
    document.getElementById("toggle").classList.toggle("triangle-down");
    document.getElementById("nav-ul").classList.toggle("hide-small");
}

// Exercise 1 toggle
document.getElementById("ex1-link").onclick = () => {
    document.getElementById("ex1").classList.toggle("hide-col");
    document.getElementById("ex2").classList.add("hide-col");
}

// Exercise 2 toggle
document.getElementById("ex2-link").onclick = () => {
    document.getElementById("ex2").classList.toggle("hide-col");
    document.getElementById("ex1").classList.add("hide-col");
}

// Color slider
document.getElementById("slider").value = 0; // Initial value of slider

document.getElementById("slider").oninput = () => {
    let val = document.getElementById("slider").value;
    document.getElementById("ex1").style.backgroundColor = "rgb(" + val + ", 0, 0)";
    const colorP = document.getElementById("color-message");
    if (val >= 85 && val < 170) {
        colorP.innerHTML = "You're warm";
    } else if (val >= 170 && val < 255) {
        colorP.innerHTML = "Getting warmer";
    } else if (val == 255) {
        colorP.innerHTML = "It's hot!";
    } else {
        colorP.innerHTML = "";
    }
}

// Picture chooser
document.getElementById("button-box").onclick = (e) => {
    const button = e.target.id.toLowerCase(); // Parses button id from button-box click
    if (button == "btn-small") {
        document.getElementById("pic-chosen").src = "https://picsum.photos/200";
    } else if (button == "btn-med") {
        document.getElementById("pic-chosen").src = "https://picsum.photos/400";
    } else if (button == "btn-large") {
        document.getElementById("pic-chosen").src = "https://picsum.photos/600";
    }
};