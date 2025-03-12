function register() {
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    if (localStorage.getItem(username)) {
        alert("User already exists!");
    } else {
        localStorage.setItem(username, password);
        alert("Registration successful!");
    }
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login successful! Welcome, " + username);
    } else {
        alert("Invalid username or password!");
    }
}
