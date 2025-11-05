Uname = document.getElementById('regUsername');
Pwd = document.getElementById('regPassword');
CPwd = document.getElementById('regConfirmPassword');
RegBtn = document.getElementById('registerBtn');
Msg = document.getElementById('msg');

RegBtn.addEventListener('click', () => {
    const username = Uname.value.trim();
    const password = Pwd.value.trim();
    const confirmPassword = CPwd.value.trim();
    if (username === '' || password === '' || confirmPassword === '') {
        Msg.style.color = 'red';
        Msg.innerText = 'All fields are required.';
        return;
    }
    if (password !== confirmPassword) {
        Msg.style.color = 'red';
        Msg.innerText = 'Passwords do not match.';
        return;
    }
    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    if (usersList.find(u => u.username === username)) {
        Msg.style.color = 'red';
        Msg.innerText = 'Username already exists.';
        return;
    }
    const newUser = { username, password };
    usersList.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersList));
    Msg.style.color = 'green';
    Msg.innerText = 'Registration successful! You can now log in.';
    Uname.value = '';
    Pwd.value = '';
    CPwd.value = '';
    window.location.href = 'index.html';
});

