// https://kuriakm.github.io/csce242/json/store-items.json
const getProducts = async () => {
    try {
        return (await fetch("https://kuriakm.github.io/csce242/json/store-items.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showProduct = async () => {
    const products = await getProducts();
    // const productDetails = document.getElementById("information");

    const reviews = document.getElementById("review-box");

    // Pull product name from window URL to populate store-item.html
    const param = new URLSearchParams(window.location.search);
    const itemType = param.get('item');

    products.forEach((product) => {
        if (product.item == itemType) {
            const reviewDiv = document.createElement("div");

            const reviewLength = Object.keys(product.reviews).length;
            if (reviewLength > 0) {
                for (let i = 0; i < reviewLength; i++) {
                    reviewDiv.append(getReview(product.reviews[i]));
                }
            }
            reviews.append(reviewDiv);
        }
    });
};

// Get review to append to review-box
const getReview = (review) => {
    const reviewSection = document.createElement("div");
    reviewSection.classList.add("reviews");

    const reviewHeader = document.createElement("div");
    reviewHeader.classList.add("review-head");

    const reviewer = document.createElement("h4");
    reviewer.innerHTML = review.reviewer;

    reviewHeader.append(reviewer);
    reviewSection.append(reviewHeader);

    const reviewContent = document.createElement("p");
    reviewContent.innerHTML = review.content;
    reviewSection.append(reviewContent);

    const reviewRating = document.createElement("p");
    reviewRating.classList.add("rating");
    reviewRating.innerHTML = review.rating + "/5";
    reviewSection.append(reviewRating);
    return reviewSection;
}

// Review form submission
document.getElementById("review-form").onsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["txt-name"].value;
    const review = form.elements["txt-com"].value;
    const rating = form.elements["rating"].value;
    const result = document.getElementById("result");

    // Append review to review-box
    try {
        const reviewSection = document.createElement("div");
        reviewSection.classList.add("reviews");

        const reviewHeader = document.createElement("div");
        reviewHeader.classList.add("review-head");

        const reviewer = document.createElement("h4");
        reviewer.innerHTML = name;

        reviewHeader.append(reviewer);
        reviewSection.append(reviewHeader);

        const reviewContent = document.createElement("p");
        reviewContent.innerHTML = review;
        reviewSection.append(reviewContent);

        const reviewRating = document.createElement("p");
        reviewRating.classList.add("rating");
        reviewRating.innerHTML = rating + "/5";
        reviewSection.append(reviewRating);

        document.getElementById("review-box").append(reviewSection);
        result.innerHTML = "Review successfully submitted.";

        // Display timeout
        setTimeout(function () {
            result.style.display = "none";
        }, 2000);
    } catch (error) {
        console.log(error);
        result.innerHTML = "Sorry, there was an issue submitting your review.";

        // Display timeout
        setTimeout(function () {
            result.style.display = "none";
        }, 2000);
    }


}

window.onload = showProduct();

const resetForm = () => {
    document.getElementById("review-form").reset();
}

window.onload = resetForm();