// Отримання посилань на елементи HTML
const changeCityButton = document.getElementById('changeCityButton');
const cityInfoContainer = document.getElementById('cityInfo');

// Описи міст та їхніх даних
const cities = [
    {
        name: 'Париж, Франція',
        image: 'des1.jpg',
        description: 'Париж - місто, що завжди було місцем, де розцвітають почуття і де кожен куток виткається історією любові...'
    },
    {
        name: 'Рим, Італія',
        image: 'des2.jpg',
        description: 'Рим - це місто, яке переплетається із минулим у кожному камені та вуличці...'
    },
    {
        name: 'Токіо, Японія',
        image: 'des3.jpg',
        description: 'Токіо - це не просто місто, а арена для зустрічі з майбутнім...'
    },
    {
        name: 'Нью-Йорк, США',
        image: 'des4.jpg',
        description: 'Нью-Йорк - це місто, де сон ніколи не переважає над мріями...'
    }
];

let currentCityIndex = 0;

// Функція для оновлення інформації про місто
function updateCityInfo() {
    const city = cities[currentCityIndex];
    const cityImage = cityInfoContainer.querySelector('img');
    const cityName = cityInfoContainer.querySelector('h3');
    const cityDescription = cityInfoContainer.querySelector('p');

    cityImage.src = city.image;
    cityName.textContent = city.name;
    cityDescription.textContent = city.description;
}

// Обробник кліку по кнопці
changeCityButton.addEventListener('click', () => {
    currentCityIndex = (currentCityIndex + 1) % cities.length; // Перехід до наступного міста (з циклом)
    updateCityInfo();
});

// Ініціалізація початкового міста
updateCityInfo();
