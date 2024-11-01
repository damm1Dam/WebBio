// achievements.html

const achievementsDiv = document.getElementById('achievements');

// Получаем текущих пользователей из локального хранилища
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = users.find(user => user.email === localStorage.getItem('currentUserEmail'));

if (currentUser) {
    achievementsDiv.innerHTML = "<ul>";

    const achievements = currentUser.achievements;

    achievements.forEach(achievement => {
        achievementsDiv.innerHTML += `<li>${achievement}</li>`;
    });

    if (achievements.length === 0) {
        achievementsDiv.innerHTML += "<li>No achievements yet!</li>";
    }

    achievementsDiv.innerHTML += "</ul>";
} else {
    achievementsDiv.innerHTML = "<p>Вы не вошли в систему.</p>";
}