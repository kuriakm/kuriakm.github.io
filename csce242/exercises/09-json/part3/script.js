//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const getDrinks = async () => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch (error) {
        console.log(error);
    }
};

const showDrinks = async () => {
    const drinks = (await getDrinks()).drinks;
    const drinkList = document.getElementById("cocktails");

    console.log(drinks);
    drinks.forEach(async (drink) => {
        drinkList.append(getDrink(drink));
    });
};

const getDrink = (drink) => {
    const section = document.createElement("section");
    section.classList.add("drink");

    const h3 = document.createElement("h3");
    h3.innerHTML = drink.strDrink;
    section.append(h3);

    const img = document.createElement("img");
    img.src = drink.strDrinkThumb;
    section.append(img);

    section.onclick = () => {
        const dialog = document.getElementById("dialog");
        dialog.style.display = "block";
        const dialogContent = document.getElementById("dialog-content");
        dialogContent.innerHTML = "";
        dialogContent.append(getDialog(drink));
    };

    section.classList.add("fonts");
    return section;
};

const getDialog = (drink) => {
    const content = document.createElement("section");
    const alc = document.createElement("p");
    content.append(alc);
    alc.innerHTML = "<strong>Alcoholic/Non-alcoholic?:</strong> " + drink.strAlcoholic;

    const instruct = document.createElement("p");
    instruct.innerHTML = "<strong>Instructions:</strong> " + drink.strInstructions;
    content.append(instruct);

    return content;
};

document.getElementById("dialog-x").onclick = () => {
    dialog.style.display = "none";
}

window.onload = showDrinks();