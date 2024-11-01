// register.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка на существующий аккаунт
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        document.getElementById('registrationMessage').innerText = "Пользователь с таким email уже зарегистрирован!";
        return;
    }

    // Регистрация нового пользователя
    const newUser = {
        email: email,
        password: password,
        achievements: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('registrationMessage').innerText = "Регистрация успешна!";
});