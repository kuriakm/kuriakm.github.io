// Initialize associative array 
const pictures = [
    ["images/birthday.jpg", "birthday", "A birthday is a wonderful thing to celebrate!"],
    ["images/clown.jpg", "clown", "Clowns deserve a lot better."],
    ["images/rain.jpg", "rain", "Always take an umbrella, you never know when it's going to rain."],
    ["images/read.jpg", "read", "Reading makes the world a lot more interesting."],
    ["images/shovel.jpg", "shovel", "You need a shovel to dig up dirt."],
    ["images/work.jpg", "work", "I work a lot on my laptop."],
];

// Anonymous function that runs at startup
(() => {
    const picDisplay = document.getElementById("pic-display");
    for (let i = 0; i < pictures.length; i++) {
        const image = document.createElement("img");
        image.src = pictures[i][0];
        picDisplay.append(image);

        image.onclick = () => {
            document.getElementById("name").innerHTML = `${pictures[i][1]}`
            document.getElementById("details").innerHTML = `${pictures[i][2]}`;
        };

    }

})();