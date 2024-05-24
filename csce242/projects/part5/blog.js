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

    posts.forEach(async (post) => {
        blogPosts.append(getBlogPost(post));
    });
};

const getBlogPost = (post) => {
    // Link
    const link = document.createElement("a");
    link.href = "post.html?seo=" + post.seo;

    // Post section
    const section = document.createElement("section");
    section.classList.add("post-content");
    link.append(section);

    // Thumbnail image
    const img = document.createElement("img");

    // Area for headline and lede (class post-text)
    const div = document.createElement("div");

    // Headline 
    const h4 = document.createElement("h4");

    // Lede
    const p = document.createElement("p");

    // Populate post preview content
    h4.innerHTML = post.headline;
    p.innerHTML = post.lede;
    img.src = "images/posts/" + post.thumbnail.name;

    // Append items to section and post-text div
    section.append(img);
    section.append(div);
    div.append(h4);
    div.append(p);

    return link;
}

window.onload = showPosts();