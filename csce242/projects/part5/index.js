//https://kuriakm.github.io/csce242/json/post.json
/* const getPosts = async () => {
    try {
        return (await fetch("https://kuriakm.github.io/csce242/json/post.json")).json();
    } catch (error) {
        console.log(error);
    }
}; */

const slide = (nextImage) => {
    const currentImage = document.querySelector("#featured :not(.hidden)")
    // Hide current image shown
    currentImage.classList.addAll("hidden");
    nextImage.classList.removeAll("hidden");
}

// Slide images using arrows
//Slide forward
document.getElementById("forward-arrow").onclick = () => {
    const currentImage = document.querySelector("#featured :not(.hidden)")
    let nextImage = currentImage.nextElementSibling;

    // If we get to the end of the list, change nextImage to first image
    if (nextImage == null) {
        nextImage = document.querySelector(`#featured :first-child`);
    }
    slide(nextImage);
};

//Slide backward
document.getElementById("backward-arrow").onclick = () => {
    const currentImage = document.querySelector("#featured :not(.hidden)")
    let nextImage = currentImage.previousElementSibling;

    // If we get to the end of the list, change nextImage to first image
    if (nextImage == null) {
        nextImage = document.querySelector(`#featured :last-child`);
    }
    slide(nextImage);
}

/* const showFeaturedPosts = async () => {
    const posts = await getPosts();
    const slideshow = document.getElementById("slideshow");

    const post1 = posts[0];
    const link1 = document.createElement("a");
    link1.href = "post.html?seo=" + post1.seo;
    slideshow.append(link1);

    const img1 = document.createElement("img");
    img1.src = "images/posts/" + post1.post_preview[0].thumbnail;
    slideshow.append(img1);

    const div1 = document.createElement("div");
    div1.classList.add("bottom-left");

    const headline1 = document.createElement("h4");
    headline1.innerHTML = post1.post_preview[0].headline;
    div1.append(headline1);

    const lede1 = document.createElement("p");
    lede1.innerHTML = post1.post_preview[0].lede;
    div1.append(lede1);
    slideshow.append(div1);

        const post2 = posts[1];
        const post3 = posts[2]; 

}*/
/* <section id="slideshow">
                <div class="slides fade">
                    <h2>Featured Posts</h2>
                    <!-- Add back when slideshow function is added -->
                    <!-- <div class="num-text">1 / 2</div> -->
                    <a href="post.html">
                        <img src="images/posts/buckshot-thumb.jpg">
                        <div class="bottom-left">
                            <h4><em>Buckshot Roulette</em>: The Devastating Reality of Gambling Addiction</h4>
                            <p> How a simple horror game beautifully depicts the journey of falling too
                                deep into a gambling addiction.</p>
                        </div>
                    </a>
                </div> */
/* window.onload = showFeaturedPosts(); */