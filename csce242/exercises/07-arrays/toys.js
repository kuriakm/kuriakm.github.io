// Initialize array
const toys = ["drum", "ball", "rope", "ballon", "tire"];

// Initialize associative array
const toyPrices = [];

toyPrices["barbie"] = 7.54;
toyPrices["dollhouse"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2.3;
toyPrices["bike"] = 5.6;

const showToys = () => {
    const display = document.getElementById("toy-display");
    // Version 1 
    /*
        // For each loop
        for (let i in toys) {
            // Show toys array items in one line
            // display.innerHTML += toys[i];

            // Displays toys items in separate lines (p)
            let p = document.createElement("p");
            p.innerHTML = toys[i];
            display.append(p);
        }
    */

    // Version 2
    // Created function to be used in for each loop
    // toy => toys[i]
    toys.forEach((toy) => {
        //console.log(toy);
        let p = document.createElement("p");
        p.innerHTML = toy;
        display.append(p);
    });
}

showToys();

// Showing toy table
/*
const showToyTable = () => {
    console.log("Toy table");
}

showToyTable();
*/

// Showing toy table
// Automatically executing an anonymous function
(() => {
    const toyTable = document.getElementById("toy-table");
    // toy represents a key in toyPrices
    for (let toy in toyPrices) {
        // Create and append row to toyTable
        const row = document.createElement("tr");
        toyTable.append(row);

        // Toy column
        const col1 = document.createElement("td");
        col1.innerHTML = toy;

        row.append(col1);

        // Price column
        const col2 = document.createElement("td");
        col2.innerHTML = "$" + toyPrices[toy];

        row.append(col2);

        // Add click action to row
        row.onclick = () => {
            document.getElementById("details").innerHTML = `${toy} costs: $${toyPrices[toy]}`;
        };
    }
})();