const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(.hidden)")
    // Hide current image shown
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
}

// Slide images using arrows
//Slide forward
document.getElementById("forward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)")
    let nextImage = currentImage.nextElementSibling;

    // If we get to the end of the list, change nextImage to first image
    if (nextImage == null) {
        nextImage = document.querySelector(`#preview :first-child`);
    }
    slide(nextImage);
};

//Slide backward
document.getElementById("backward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)")
    let nextImage = currentImage.previousElementSibling;

    // If we get to the end of the list, change nextImage to first image
    if (nextImage == null) {
        nextImage = document.querySelector(`#preview :last-child`);
    }
    slide(nextImage);
}


// Slide to a clicked thumbnail

// Access all images under the thumbs id (array) using CSS syntax
// Attaching onClick to each element
document.querySelectorAll("#thumbs img").forEach((thumb, index) => {
    // Embedded anonymous function
    thumb.onclick = () => {
        // Access 2nd image in preview (Cherries)
        // CSS uses 1-based indexing (remember for querySelector/All)
        // JavaScript uses 0-based indexing
        const nextImage = document.querySelector(`#preview :nth-child(${index+1})`);
        slide(nextImage);
    };
});