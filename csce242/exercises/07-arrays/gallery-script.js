document.querySelectorAll(".items section").forEach((section) => {
    section.onclick = () => {
        const dialog = document.getElementById("dialog");
        dialog.style.display = "block";

        const imageSource = section.querySelector("img").src;
        dialog.querySelector("img").src = imageSource;

        const dialogDetails = document.getElementById("dialog-details");

        // Clears dialogDetails content before appending
        dialogDetails.innerHTML = "";

        // Add h3 to dialogDetails
        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;
        dialogDetails.append(h3);

        // Add p to dialogDetails
        const p = document.createElement("p");
        p.innerHTML = section.querySelector("p").innerHTML;
        dialogDetails.append(p);
    }
});

document.getElementById("dialog-x").onclick = () => {
    dialog.style.display = "none";
}