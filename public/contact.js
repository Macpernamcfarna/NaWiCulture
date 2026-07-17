const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("emailAddr").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const subject = document.getElementById("subjectLine").value;
    const message = document.getElementById("messageBody").value.trim();

    try {
        const response = await fetch("/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                subject,
                message
            })
        });

        const data = await response.json();

        if (data.success) {
            const popup = document.createElement("div");

            popup.textContent = "🎉 Message sent successfully!";
            popup.style.position = "fixed";
            popup.style.top = "20px";
            popup.style.right = "20px";
            popup.style.padding = "15px 20px";
            popup.style.background = "#00a126";
            popup.style.color = "#fff";
            popup.style.borderRadius = "8px";
            popup.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
            popup.style.zIndex = "9999";

            document.body.appendChild(popup);

            setTimeout(() => popup.remove(), 3000);

            contactForm.reset();
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error(error);
        alert("Unable to connect to the server.");
    }
});