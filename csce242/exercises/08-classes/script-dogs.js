// Create class Dog
class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        // Expand/Contract Arrow
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.innerHTML = "&#x2964;";

        // Setup columns
        const col = document.createElement("section");
        col.classList.add("columns");
        section.append(col);

        // Image column (left)
        const imgCol = document.createElement("section");
        col.append(imgCol);

        // Append image source and alt text
        const img = document.createElement("img");
        img.src = "images/" + this.pic;
        img.alt = this.title + " the " + this.breed;
        imgCol.append(img);

        // Data column (right)
        const dataCol = document.createElement("section");
        dataCol.classList.add("hidden", "more");
        col.append(dataCol);
        dataCol.append(this.paragraph("Breed", this.breed));
        dataCol.append(this.paragraph("Age", this.age + (this.age == 1 ? " year " : " years ") + "old"));
        dataCol.append(this.paragraph("Color", this.color));
        dataCol.append(this.paragraph("Size", this.size));

        arrow.onclick = () => {
            if (dataCol.classList.contains("hidden")) {
                arrow.innerHMTL = "&#x2964";
            } else {
                arrow.innerHTML = "&#x2962";
            }
            dataCol.classList.toggle("hidden");
        };

        return section;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Janie", "Pitbull", "Black and White", 2, "small", "pitt-bull.jpg"));
dogs.push(new Dog("Rebecca", "Golden Retriever", "Yellow", 1, "small", "golden-retriever.jpg"));
dogs.push(new Dog("Mario", "Yorkie", "Black and Brown", 1, "small", "yorkie.jpg"));

dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
});