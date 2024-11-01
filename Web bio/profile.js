// profile.html

document.getElementById('saveProfile').addEventListener('click', function() {
    const name = document.getElementById('userName').value;
    document.getElementById('profileInfo').innerHTML = `<p>Привет, ${name}! Ваш профиль сохранен.</p>`;
});