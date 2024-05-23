//https://kuriakm.github.io/csce242/json/post.json
const getPosts = async () => {
    try {
        return (await fetch("https://kuriakm.github.io/csce242/json/post.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showPosts = async () => {
    const posts = await getPosts();
    const blogPosts = document.getElementById("posts");

    blogPosts.forEach(async (post) => {
        blogPosts.append(getBlogPost(post));
    });
};

const getBlogPost = (post) => {
    // Post link
    const a = document.createElement("a");

    // Post section
    const section = document.createElement("section");
    a.append(section);

    // Thumbnail image
    const img = document.createElement("img");

    // Area for headline and lede (class post-text)
    const div = document.createElement("div");
    div.classList.add("post-text");

    // Headline 
    const h4 = document.createElement("h4");

    // Lede
    const p = document.createElement("p");

    for (let i in post.post_preview) {
        console.log(i++);
    }
    return a;
}

window.onload = showPosts();
/* blog.html
<section>
    <img src="images/buckshot.jpg">
        <div class="post-text">
            <h4>Buckshot Roulette: The Devastating Reality of Gambling Addiction</h4>
            <p>How a simple horror game beautifully depicts the journey of falling too deep into a gambling addiction.</p>
        </div>
</section>
*/

/* post.html
<section id="blog-post">
    <h2>Buckshot Roulette: The Devastating Reality of Gambling Addiction</h2>
        <h4>May 22nd, 2024</h4>
        <p> Despite the simplicity of the game, <em>Buckshot Roulette</em> (2024) paints a story about the
            harrowing reality of gambling addiction and the lengths people will go to satiate their addiction.
        </p>
    <!-- Blog Post box -->
    <section id="posts">
        <section>
            <img src="images/buckshot.jpg">
            <section id="attribute">
                Image by <a href="https://store.steampowered.com/app/2835570/Buckshot_Roulette/">Mike Klubnika</a>
            </section>
            <div class="post-text">
                <p> The protagonist was doomed the moment you started the game.</p>
                    <p> From the adrenaline-pumping music to the intensity of the amped-up Russian roulette
                    you play with the dealer, it is easy to miss the tragedy that is taking place here:
                    regardless of whether you "win" or "lose", the protagonist has already fallen too deep
                    into a gambling addiction that they cannot recover from.</p>
                <p> Before the game has officially started, the main menu highlights the premise (and the
                    inevitable temptation) of the game through the buckshots raining down on screen. This
                    design choice creates a underlying agreement between you and the game that the actions
                    you take for the character you are playing as may cost them their life.</p>
                <img src="images/buckshot-2.jpg">
                <section id="attribute">
                    Image by <a href="https://store.steampowered.com/app/2835570/Buckshot_Roulette/">Mike Klubnika</a>
                </section>
                    <p> We begin the actual game with the protagonist in a bathroom with loud (but muffled)
                        club music playing outside and the letters "AFRAID" written on the mirror. This is a
                        crucial but often overlooked detail in the game. In other media such as movies and TV
                        shows, club bathrooms are often used as areas where characters can let go and express
                        themselves fully outside of the suffocating environments they were initial in.</p>
                <img src="images/buckshot-3.jpg">
                <section id="attribute">
                    Image by <a href="https://store.steampowered.com/app/2835570/Buckshot_Roulette/">Mike Klubnika</a>
                </section>
                <p>To be added at a later date...</p>
            </div>
        </section>
    </section>
</section>
*/