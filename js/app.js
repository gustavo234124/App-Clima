document.getElementById('get-weather-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=2f351aec60d953484d1c3d385f517553')
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').innerText = 'Clima en ' + data['name'] + ', ' + data['sys']['country'];
            document.getElementById('temperature').innerText = 'Temperatura: ' + (data['main']['temp'] - 273).toFixed(2) + '°C';
            document.getElementById('weather-desc').innerText = 'Descripción: ' + data['weather'][0]['description'];
        })
        .catch(() => {
            alert('Nombre de ciudad inválido, ¡inténtalo de nuevo!');
        });
});