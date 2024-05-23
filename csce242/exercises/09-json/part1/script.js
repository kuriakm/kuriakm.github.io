// Gets data from shoes.json (asynchronous)
const getShoes = async () => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    // Try-catch
    try {
        // Fetch data from url (awaiting it asynchronously)
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

// Shows the list of shoes 
// When calling an async function, the function calling it must be async as well
const showShoes = async () => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");
    shoes.forEach((shoe) => {
        shoesSection.append(getShoe(shoe));
    });
};

const getShoe = (shoe) => {
    const section = document.createElement("section");

    const title = document.createElement("h3");
    title.innerHTML = shoe.name + " - " + shoe.brand;
    section.append(title);

    const price = document.createElement("h4");
    price.innerHTML = "$" + shoe.price;
    section.append(price);

    const rating = document.createElement("h4");
    rating.innerHTML = shoe.rating + "/5";
    section.append(rating);

    const material = document.createElement("h4");
    material.innerHTML = shoe.material;
    section.append(material);

    const desc = document.createElement("p");
    desc.innerHTML = shoe.description;
    section.append(desc);

    const reviews = document.createElement("ul");
    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        reviews.append(li);
    });
    section.append(reviews);

    return section;
};

showShoes();

// Added toggle nav
document.getElementById("nav-toggle").onclick = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};