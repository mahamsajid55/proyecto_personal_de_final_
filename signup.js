document.querySelector("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault(); // Prevent form submission
    } else {
        event.preventDefault(); // Prevent default form action
        window.location.href = "thankyou.html"; // Redirect to Thank You page
    }
});

