document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const profileForm = document.getElementById("profileForm");
    const feedbackForm = document.getElementById("feedbackForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            localStorage.setItem("username", username);
            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const storedUsername = localStorage.getItem("username");

            if (username === storedUsername) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password");
            }
        });
    }

    if (profileForm) {
        profileForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const profileUsername = document.getElementById("profileUsername").value;
            const profileEmail = document.getElementById("profileEmail").value;
            localStorage.setItem("profileUsername", profileUsername);
            localStorage.setItem("profileEmail", profileEmail);
            alert("Profile updated successfully!");
        });

        const storedProfileUsername = localStorage.getItem("profileUsername");
        const storedProfileEmail = localStorage.getItem("profileEmail");

        if (storedProfileUsername) {
            document.getElementById("profileUsername").value = storedProfileUsername;
        }
        if (storedProfileEmail) {
            document.getElementById("profileEmail").value = storedProfileEmail;
        }
    }

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const feedback = document.getElementById("feedback").value;
            alert("Thank you for your feedback!");
            document.getElementById("feedback").value = ""; // Clear the textarea
        });
    }

    const user = localStorage.getItem("loggedInUser");
    if (user && document.getElementById("user")) {
        document.getElementById("user").textContent = user;
    }
});
