// Snake class
class Snake {
    constructor(name, species, size, food, habitat, funFact, image) {
        this.name = name;
        this.species = species;
        this.size = size;
        this.food = food;
        this.habitat = habitat;
        this.funFact = funFact;
        this.image = image;
    }

    // Create column section for Snake
    get section() {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        h3.classList.add("fonts");

        const img = document.createElement("img");
        img.src = "images/" + this.image;

        section.append(h3);
        section.append(img);

        // When section is clicked, the dialog modal will pop up with the section created in expandedSection
        section.onclick = () => {
            const dialog = document.getElementById("dialog");
            dialog.style.display = "block";
            const dialogContent = document.getElementById("dialog-content");
            // Clear dialog-content
            dialogContent.innerHTML = "";
            dialogContent.appendChild(this.expandedSection);
        };

        return section;
    }

    // Create section from attributes to be used in pop-up
    get expandedSection() {
        const content = document.createElement("section");
        content.classList.add("columns");
        const dialogDetails = document.createElement("section");
        const dialogImg = document.createElement("img");

        // Image
        dialogImg.src = "images/" + this.image;

        // Details
        const title = document.createElement("h2");
        title.innerHTML = this.name;
        title.classList.add("fonts");
        dialogDetails.append(title);
        dialogDetails.append(this.paragraph("Species", this.species));
        dialogDetails.append(this.paragraph("Size", this.size));
        dialogDetails.append(this.paragraph("Food", this.food));
        dialogDetails.append(this.paragraph("Habitat", this.habitat));
        dialogDetails.append(this.paragraph("Fun Fact", this.funFact));
        dialogDetails.classList.add("fonts");

        // Append content
        content.append(dialogDetails);
        content.append(dialogImg);

        return content;
    }

    // Create paragraph elements for each item
    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

// Populate array with Snake class elements
const snakes = [];
snakes.push(new Snake("Gold-ringed Cat Snake", "Boiga dendrophila", "8.5 feet", "Reptiles, birds, and small mammals", "Lowland rainforests", "It is often confused with the banded krait snake, which is extremely poisonous compared to the Gold-ringed Cat Snake", "cat-snake.jpg"));
snakes.push(new Snake("Elegant Bronzeback", "Dendrelaphis formosus", "4.6 feet", "Lizards and tree frogs", "Tropical rainforests and dense vegetation areas", "It can glide through the air from one tree to another through its flattened body and having ribs that are laterally extended", "elegant-bronzeback.jpg"));
snakes.push(new Snake("European Ratsnake", "Zamenis situla", "2.95 feet", "Rodents, small mammals, birds, and occasionally eggs", "Shrublands", "It is able to adapt to different environments with ease, making it a subject of interest among herpetologists (scientists that focus on amphibians and repitles)", "leopard-snake-european-ratsnake.jpg"));
snakes.push(new Snake("Mangrove Pit Viper", "Trimeresurus purpureomaculatus", "2.56 feet", "Small rodents, birds, frogs, and lizards", "Forests and wetlands", "It gives birth to live young rather than laying eggs", "mangrove-pit-viper.jpg"));

// Iterate through snakes array and append each element's column section to column-list
snakes.forEach((snake) => {
    document.getElementById("column-list").append(snake.section);
});

// Exit out of dialog screen
document.getElementById("dialog-x").onclick = () => {
    dialog.style.display = "none";
}