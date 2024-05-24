//https://kuriakm.github.io/csce242/json/post.json
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

    /* Pull seo from window url to populate post.html */
    const param = new URLSearchParams(window.location.search);
    const seo = param.get('seo');

    posts.forEach((post) => {
        if (post.seo == seo) {
            /* Post header */
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

            /* Post content */
            const postSection = document.createElement("section");
            postSection.id = "posts";

            /* Thumbnail*/
            const thumbnail = document.createElement("img");
            thumbnail.src = "images/posts/" + post.thumbnail.name;

            postSection.append(thumbnail);

            // Thumbnail Attribute
            const thumbAttribute = document.createElement("section");
            thumbAttribute.classList.add("attribute");
            thumbAttribute.innerHTML = "Image by ";

            // Credits can only go between 1 and 2 developers/urls
            const thumbCreditLength = Object.keys(post.thumbnail.credit).length;
            if (thumbCreditLength == 1) {
                const thumbCredit = document.createElement("a");
                thumbCredit.innerHTML = post.thumbnail.credit[0].dev;
                thumbCredit.href = post.thumbnail.credit[0].url;
                thumbAttribute.append(thumbCredit);
            } else {
                const thumbCredit1 = document.createElement("a");
                thumbCredit1.innerHTML = post.thumbnail.credit[0].dev;
                thumbCredit1.href = post.thumbnail.credit[0].url;

                const thumbCredit2 = document.createElement("a");
                thumbCredit2.innerHTML = " and " + post.thumbnail.credit[1].dev;
                thumbCredit2.href = post.thumbnail.credit[1].url;
                thumbAttribute.append(thumbCredit1);
                thumbAttribute.append(thumbCredit2);
            }

            postSection.append(thumbAttribute);

            /*  Content */
            const contentLength = Object.keys(post.content).length;
            for (let i = 0; i <= contentLength - 1; i++) {
                /* Text */
                const p = document.createElement("p");
                p.innerHTML = post.content[i].line;
                postSection.append(p);
                /* Image */
                if (Object.keys(post.content[i].image).length != 0) {
                    const img = document.createElement("img");
                    img.src = "images/posts/" + post.content[i].image.name;
                    postSection.append(img);

                    /* Attribute */
                    const attribute = document.createElement("section");
                    attribute.classList.add("attribute");
                    attribute.innerHTML = "Image by ";

                    // Credits can only go between 1 and 2 developers/urls
                    const creditLength = Object.keys(post.content[i].image.credit).length;
                    if (creditLength == 1) {
                        const credit = document.createElement("a");
                        credit.innerHTML = post.content[i].image.credit[0].dev;
                        credit.href = post.content[i].image.credit[0].url;
                        attribute.append(credit);
                    } else {
                        const credit1 = document.createElement("a");
                        credit1.innerHTML = post.content[i].image.credit[0].url;
                        credit1.href = post.content[i].image.credit[0].url;

                        const credit2 = document.createElement("a");
                        credit2.innerHTML = " and " + post.content[i].image.credit[1].dev;
                        credit2.href = post.content[i].image.credit[1].url;
                        attribute.append(credit1);
                        attribute.append(credit2);
                    }
                    postSection.append(attribute);
                }
            }
            postContent.append(postSection);
        }
    });
};

window.onload = showContent();