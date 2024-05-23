// https://portiaportia.github.io/json/ice-creams.json
const getIceCreams = async () => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showIceCreams = async () => {
    const iceCreams = (await getIceCreams());
    const iceCreamList = document.getElementById("icecream-list");

    iceCreams.forEach(async (iceCream) => {
        iceCreamList.append(getIceCream(iceCream));
    });
};

const imgUrl = "https://portiaportia.github.io/json/images/ice-creams/";
const getIceCream = (iceCream) => {
    const section = document.createElement("section");
    section.classList.add("container");

    // Image
    const img = document.createElement("img");
    img.src = imgUrl + iceCream.image;
    section.append(img);

    // Overlay
    const div = document.createElement("div");
    div.classList.add("overlay");

    // Overlay Text
    const overlayText = document.createElement("p");
    overlayText.innerHTML = iceCream.name;
    div.append(overlayText);

    section.append(div);

    return section;
};

window.onload = showIceCreams();