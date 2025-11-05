document.addEventListener("DOMContentLoaded", () => {

username = document.getElementById('username');
password = document.getElementById('password');
loginButton = document.getElementById('loginBtn');
msg = document.getElementById('msg');


loginButton.addEventListener('click', async () => {
    const user = username.value.trim();
    const pass = password.value.trim();
    if (user === '' || pass === '') {
        alert('Username and password cannot be empty.');
        return;
    } 
    else await LoginUser(user, pass);
});






async function LoginUser(user, pass) {

    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate async operation

    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    const userData = usersList.find(u => u.username === user && u.password === pass);
    if (userData) {
        msg.style.color = 'green';
        msg.innerText = 'Login successful! Redirecting...';
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        window.location.href = 'inventory.html';
    }
    else {
        msg.style.color = 'red';
        msg.innerText = 'Invalid username or password.';
    }
}

});