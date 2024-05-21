class Child {
    constructor(firstName, lastName, picture, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.grade = grade;
    }

    get tableRow() {
        const tr = document.createElement("tr");
        tr.append(this.tableColumn(this.firstName));
        tr.append(this.tableColumn(this.lastName));
        tr.append(this.tableColumn(this.grade));

        tr.onclick = () => {
            const details = document.getElementById("child-details");
            details.innerHTML = "";
            const img = document.createElement("img");
            img.src = "images/" + this.picture;
            details.append(img);
        }

        return tr;
    }

    tableColumn(data) {
        const td = document.createElement("td");
        td.innerHTML = data;
        return td;
    }
}

const children = [];
children.push(new Child("Amy", "Smith", "amy.jpg", 2));
children.push(new Child("Bobby", "Malone", "bobby.png", 1));
children.push(new Child("Carl", "Smith", "carl.png", 2));
children.push(new Child("Dave", "Worthington", "dave.jpg", 4));
children.push(new Child("Erin", "Collins", "erin.jpg", 3));

children.forEach((child) => {
    document.getElementById("children-table").append(child.tableRow);
});