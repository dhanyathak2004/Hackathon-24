document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Perform validation or AJAX request to verify login (placeholder)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (replace with actual authentication logic)
    if (username === 'user' && password === 'password') {
        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});
