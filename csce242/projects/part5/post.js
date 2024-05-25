// https://kuriakm.github.io/csce242/json/post.json
const getPosts = async () => {
    try {
        return (await fetch("https://kuriakm.github.io/csce242/json/post.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showContent = async () => {
    const posts = await getPosts();
    const postContent = document.getElementById("blog-post");

    // Pull seo from window url to populate post.html
    const param = new URLSearchParams(window.location.search);
    const seo = param.get('seo');

    posts.forEach((post) => {
        if (post.seo == seo) {
            // Post header
            const headerSection = document.createElement("section");

            const headline = document.createElement("h2");
            headline.innerHTML = post.headline;

            const date = document.createElement("h4");
            date.innerHTML = post.date;

            const subtitle = document.createElement("p");
            subtitle.innerHTML = post.subtitle;

            headerSection.append(headline);
            headerSection.append(date);
            headerSection.append(subtitle);

            postContent.append(headerSection);

            // Post content
            const postSection = document.createElement("section");
            postSection.id = "posts";

            // Thumbnail
            const thumbnail = document.createElement("img");
            thumbnail.src = "images/posts/" + post.thumbnail.name;

            postSection.append(thumbnail);

            // Thumbnail Attribute
            postSection.append(getAttribute(post.thumbnail.credit));

            //  Content
            const contentLength = Object.keys(post.content).length;
            for (let i = 0; i <= contentLength - 1; i++) {

                // Text
                const p = document.createElement("p");
                p.innerHTML = post.content[i].line;
                postSection.append(p);

                // Image
                if (Object.keys(post.content[i].image).length != 0) {
                    const img = document.createElement("img");
                    img.src = "images/posts/" + post.content[i].image.name;
                    postSection.append(img);

                    // Image Attribute
                    postSection.append(getAttribute(post.content[i].image.credit));
                }
            }
            postContent.append(postSection);
        }

    });
};

const getAttribute = (imageCredit) => {
    const attribute = document.createElement("section");
    attribute.classList.add("attribute");
    attribute.innerHTML = "Image by ";

    const creditLength = Object.keys(imageCredit).length;

    if (creditLength == 1) {
        const credit = document.createElement("a");
        credit.innerHTML = imageCredit[0].dev;
        credit.href = imageCredit[0].url;
        attribute.append(credit);
    } else if (creditLength == 2) {
        const credit = document.createElement("a");
        credit.innerHTML = imageCredit[0].dev;
        credit.href = imageCredit[0].url;

        const credit2 = document.createElement("a");
        credit2.innerHTML = " and " + imageCredit[1].dev;
        credit2.href = imageCredit[1].url;

        attribute.append(credit);
        attribute.append(credit2);
    } else {
        for (let i = 0; i < creditLength; i++) {
            const credit = document.createElement("a");
            if (i == 0) {
                credit.innerHMTL = imageCredit[i].dev;
            } else if (i < creditLength - 1) {
                credit.innerHMTL = ", " + imageCredit[i].dev;
            } else {
                credit.innerHTML = ", and " + imageCredit[i].dev;
            }
            credit.href = imageCredit[i].url;
            attribute.append(credit);
        }
    }

    return attribute;
};

window.onload = showContent();