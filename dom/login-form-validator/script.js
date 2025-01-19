document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Validation
    if (!email.includes("@") || password.length < 8) {
        message.textContent = "Invalid email or password!";
        message.style.color = "red";
    } else {
        message.textContent = "Valid email and password!";
        message.style.color = "green";
    }
});
