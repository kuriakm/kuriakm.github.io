// Error message
const validNum = (num, errorId) => {
    const errorSpan = document.getElementById(errorId);
    errorSpan.innerHTML = "";

    if (isNaN(num)) {
        errorSpan.innerHTML = "* Not a number";
        return false;
    } else if (num <= 0) {
        errorSpan.innerHTML = "* Number should be > 0";
        return false;
    }

    return true;
}

// Generate random positions
const randNum = (val) => Math.ceil(Math.random() * val);

// Star button functionality
document.getElementById("btn-star").onclick = () => {
    const num = document.getElementById("txt-star").value;
    let stage = document.getElementById("star-box");

    // Clear error message and star number message if present
    document.getElementById("error-star").classList.remove("error");
    document.getElementById("error-star").innerHTML = "";
    document.getElementById("star-box").innerHTML = "";
    document.getElementById("star-num").innerHTML = "";

    // Validate input
    if (!validNum(num, "error-star")) {
        document.getElementById("error-star").classList.add("error");
        return;
    }

    // For-loop to set top and left positions for each star
    for (let i = 0; i < num; i++) {
        let top = randNum(95);
        let left = randNum(95);
        console.log(top);
        console.log(left);
        const div = document.createElement("div");

        // Add number position to star
        // Set CSS to make text transparent
        div.innerHTML = i;
        div.classList.add("star");

        // Used percentages to make the website work on mobile 
        div.style.top = top + "%";
        div.style.left = left + "%";
        stage.append(div);

        // Display star number in star-num
        div.onclick = () => {
            const starNum = document.getElementById("star-num");
            starNum.innerHTML = `You clicked star ${i}`;
        }
    }
}