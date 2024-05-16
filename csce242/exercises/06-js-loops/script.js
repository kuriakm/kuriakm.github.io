//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

// Adjusting thermometer
document.getElementById("btn-funds").onclick = () => {
    const funds = document.getElementById("txt-funds").value;
    const errorFunds = document.getElementById("error-funds");
    let percent = "0%";
    const goal = 10000;

    errorFunds.innerHTML = "";
    if (isNaN(funds)) {
        errorFunds.innerHTML = "* Not a number";
        return;
    } else if (funds < 0) {
        errorFunds.innerHTML = "* Number must be >= 0";
        return;
    } else {
        percent = (funds / goal * 100) + "%";
    }

    document.querySelector(":root").style.setProperty("--funds", percent);
}

// Loops
document.getElementById("btn-loops").onclick = () => {
    /* console.log("button clicked"); */
    const results = document.getElementById("loops-result");

    for (let i = 0; i < 10; i++) {
        const p = document.createElement("p");
        p.innerHTML = i + 1;
        results.append(p);
    }
}

// Param Loops

const validNum = (num, errorId) => {
    const errorSpan = document.getElementById(errorId);
    errorSpan.innerHTML = "";

    if (isNaN(num)) {
        errorSpan.innerHTML = "* Not a number";
        return false;
    } else if (num < 0) {
        errorSpan.innerHTML = "* Number should be >= 0";
        return false;
    }

    return true;
}

//loop with start and end
document.getElementById("btn-lim").onclick = () => {
    const startNum = document.getElementById("txt-start").value;
    const endNum = document.getElementById("txt-end").value;
    const ul = document.getElementById("ul-count");

    const errorStart = document.getElementById("error-start");

    ul.innerHTML = "";
    if (!validNum(startNum, "error-start") || !validNum(endNum, "error-end")) {
        return;
    } else if (startNum > endNum) {
        errorStart.innerHTML = "Start number should be < end number";
        return;
    }

    for (let i = startNum; i <= endNum; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.append(li);

        li.onclick = () => {
            const special = document.getElementById("info");
            special.innerHTML = `you clicked ${i}`; // Equivalent = "you clicked " + i;
        }
    }
}