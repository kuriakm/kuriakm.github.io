const showEmailResult = async (e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response = await getEmailResult();

    if (response.status == 200) {
        result.innerHTML = "Email successfully sent";

        setTimeout(function () {
            result.style.display = "none";
        }, 2000);

    } else {
        result.innerHTML = "Sorry, your email was not sent";

        setTimeout(function () {
            result.style.display = "none";
        }, 2000);
    }

};

const getEmailResult = async () => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait....";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        return response;
    } catch (error) {
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";

        // Display timeout
        setTimeout(function () {
            result.style.display = "none";
        }, 2000);
    }
};

document.getElementById("contact-form").onsubmit = showEmailResult;

const resetForm = () => {
    document.getElementById("contact-form").reset();
}

window.onload = resetForm();