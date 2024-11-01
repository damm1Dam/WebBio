// footprint.html

document.getElementById('ecoFootprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const electricity = Number(document.getElementById('electricity').value);
    const water = Number(document.getElementById('water').value);
    const gas = Number(document.getElementById('gas').value);

    const co2Footprint = calculateCO2Footprint(electricity, gas);
    const waterFootprint = calculateWaterFootprint(water);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Ваш экологический след:</p>
        <p>Выбросы CO2: ${co2Footprint.toFixed(2)} кг/мес</p>
        <p>Потребление воды: ${waterFootprint.toFixed(2)} литров/мес</p>
    `;

    // Обновление достижений
    updateAchievements(co2Footprint);

    const tipsDiv = document.getElementById('tips');
    tipsDiv.innerHTML = "<p>Советы по уменьшению экологического следа:</p><ul><li>Используйте энергосберегающие лампочки.</li><li>Сократите время принятия душа.</li><li>Сортируйте отходы.</li><li>Используйте общественный транспорт или велосипеды.</li></ul>";
});

function calculateCO2Footprint(electricity, gas) {
    const electricityCO2Factor = 0.5; // кг CO2 на кВтч
    const gasCO2Factor = 2.88; // кг CO2 на м³ газа
    return (electricity * electricityCO2Factor) + (gas * gasCO2Factor);
}

function calculateWaterFootprint(water) {
    return water; // Литры воды
}

function updateAchievements(co2Footprint) {
    // Получаем текущих пользователей из локального хранилища
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = users.find(user => user.email === localStorage.getItem('currentUserEmail'));

    if (currentUser) {
        // Пример условия для достижения
        if (co2Footprint < 100) {
            currentUser.achievements.push("Сокращение выбросов CO2 на 10%");
        }
        localStorage.setItem('users', JSON.stringify(users));
    }
}