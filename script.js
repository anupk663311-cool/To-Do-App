function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    // demo credentials
    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Login Successful ✅";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid Username or Password ❌";
    }
}