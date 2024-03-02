$(document).ready(function() {
    // Handle login form submission
    $("#login-form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = $("#username").val();
        const password = $("#password").val();

        // Send AJAX request to backend for login (replace with your backend logic)
        $.ajax({
            url: '/api/login', // Replace with your backend API endpoint for login
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response.success) {
                    // Login successful, redirect to feed page
                    window.location.href = "feed.html";
                } else {
                    $("#message").text(response.message); // Display error message from backend
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error logging in:", textStatus, errorThrown);
                $("#message").text("An error occurred. Please try again.");
            }
        });
    });

    // Handle signup form submission
    $("#signup-form").submit(function(event)
