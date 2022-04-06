apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=75202&units=imperial&appid=ee11ad1912b19a7ddea28dc7f20d38f0';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

        let temp = jsonObject.main.temp;
        let speed = jsonObject.wind.speed;

        document.querySelector('.cityName').textContent = jsonObject.name;
        document.querySelector('figcaption').textContent = jsonObject.weather[0].description;
        document.querySelector('#weatherIcon').setAttribute('src', iconURL);
        document.querySelector('#weatherIcon').setAttribute('alt', jsonObject.weather[0].description);
        document.querySelector('.temp').innerHTML = `Temperature: ${temp} &deg;F`;
        document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
        document.querySelector('.humidityDiv').textContent = `Humidity: ${jsonObject.main.humidity}`;

        let windChill = computeWindChill(temp, speed);

        document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}`;

        
    });

    function computeWindChill(t, s) {
        windchill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100 / 100);

        if (t <= 50 && s > 3) {
            return windchill
        } else {
            return `N/A`
        }

        
    }


/*
   window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"QEE42Q6JYWRALRTSSC3NJS8M9",
       location:"Dallas, US", 
       unitGroup:"us", 
       forecastDays:5, 
       title:"Dallas,US", 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();
*/