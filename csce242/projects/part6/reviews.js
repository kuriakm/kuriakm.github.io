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
    /* const productDetails = document.getElementById("information"); */

    const reviews = document.getElementById("review-box");

    // Pull product name from window URL to populate store-item.html
    const param = new URLSearchParams(window.location.search);
    const itemType = param.get('item');

    products.forEach((product) => {
        if (product.item == itemType) {
            const mainDiv = document.createElement("div");

            const reviewLength = Object.keys(product.reviews).length;
            if (reviewLength > 0) {
                for (let i = 0; i < reviewLength; i++) {
                    const review = document.createElement("div");
                    review.classList.add("reviews");

                    const reviewHeader = document.createElement("div");
                    reviewHeader.classList.add("review-head");

                    const reviewer = document.createElement("h4");
                    reviewer.innerHTML = product.reviews[i].reviewer;

                    reviewHeader.append(reviewer);
                    review.append(reviewHeader);

                    const reviewContent = document.createElement("p");
                    reviewContent.innerHTML = product.reviews[i].content;
                    review.append(reviewContent);

                    const reviewRating = document.createElement("p");
                    reviewRating.classList.add("rating");
                    reviewRating.innerHTML = product.reviews[i].rating + "/5";
                    review.append(reviewRating);

                    mainDiv.append(review)
                }
            }
            reviews.append(mainDiv);
        }
    });
};

window.onload = showProduct();

/* <section id="store-item-page">
                <h2>Pixel Renaissance Stickers</h2>
                <img id="store-thumb" src="images/sticker-thumb.jpg">

                <!-- Store Item Preview pictures box -->
                <!-- Change main store item picture when store-items-pics section clicked -->
                <section id="store-item-pics" class="columns wrap three">
                    <section id="store-items" class="one">
                        <img src="images/sticker1.jpg">
                    </section>
                    <section id="store-items" class="one">
                        <img src="images/sticker2.jpg">
                    </section>
                    <section id="store-items" class="one">
                        <img src="images/sticker3.jpg">
                    </section>
                </section>
                <h3>$5.99</h3>
                <h4>Logo by Marshall Kuriakose</h4>
                <p>These cute stickers are great to put on water bottles, laptops, and phone cases! We used vinyl
                    plastic to create waterproof stickers that can endure repeated use.
                </p>
                <p>These sticker packs come with 30 total stickers (10 large, 10 medium, and 10 small sized stickers).
                </p>
                <button id="btn-add">Add to Cart</button>
            </section>
        </section>
        <!-- Review box -->
        <aside id="review-box" class="one">
            <div>
                <!-- User reviews boxes -->
                <div id="reviews">
                    <div id="review-head">
                       
                        <h4>Loren Isles</h4>
                    </div>
                    <p> These worked so well with my phone case!
                    </p>
                    <p id="rating">4.5/5</p>
                </div>
                <div id="reviews">
                    <div id="review-head">
                       
                        <h4>Aubrey Lewis</h4>
                    </div>
                    <p> The stickers are so pretty! I wished they would come in smaller sizes though.
                    </p>
                    <p id="rating">4.0/5</p>
                </div>
                <div id="reviews">
                    <div id="review-head">
                    
                        <h4>Makayla Brown</h4>
                    </div>
                    <p> I really liked these stickers, but I think it would be better with more designs rather than just
                        the logo.
                    </p>
                    <p id="rating">4.5/5</p>
                </div>
            </div>
        </aside> */