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

    // Validate input
    document.getElementById("star-box").innerHTML = "";
    if (!validNum(num, "error-star")) {
        return;
    }

    // For-loop to set top and left positions for each star
    for (let i = 0; i < num; i++) {
        let top = randNum(90);
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