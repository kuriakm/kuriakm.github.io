// Toggling the navigation bar
document.getElementById("toggle-box").onclick = () => {
    document.getElementById("nav-ul").classList.toggle("hide-small");
};

// Assignments toggle
document.getElementById("assignment-link").onclick = () => {
    document.getElementById("assignments").classList.toggle("hide-col");
    document.getElementById("project").classList.add("hide-col");
}

// Project toggle
document.getElementById("project-link").onclick = () => {
    document.getElementById("project").classList.toggle("hide-col");
    document.getElementById("assignments").classList.add("hide-col");
}