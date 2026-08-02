const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");
 
newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    try {
        const response = await fetch("/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email
            })
        });

        const data = await response.json();

        if (data.success) {
            const popup = document.createElement("div");

            popup.textContent = "🎉 Subscription successful!";
            popup.style.position = "fixed";
            popup.style.top = "20px";
            popup.style.right = "20px";
            popup.style.padding = "15px 20px";
            popup.style.background = "#28a745";
            popup.style.color = "#fff";
            popup.style.borderRadius = "8px";
            popup.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
            popup.style.zIndex = "9999";

            document.body.appendChild(popup);

            setTimeout(() => {popup.remove(); }, 3000);

            newsletterForm.reset();

            formMessage.textContent = "";
            formMessage.className = "form-message";

        } else {
            formMessage.textContent = data.error;
            formMessage.className = "form-message error";
        }

    } catch (error) {
        console.error(error);

        formMessage.textContent = "Unable to connect to the server.";
        formMessage.className = "form-message error";
        setTimeout(() => formMessage.remove(), 5000);
    }
});