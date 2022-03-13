
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=75002&units=imperial&appid=ee11ad1912b19a7ddea28dc7f20d38f0';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector('#current-temp').textContent = t;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windsp = jsObject.wind.speed;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#desc').textContent = desc;
    document.querySelector('#speed').textContent = windsp;


    if(t <= 50 && windsp > 3) {
      const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(windsp,0.16) + 0.4275 * t * Math.pow(windsp,0.16)
      document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }
  });



// //Weather

// let temp = parseFloat(document.querySelector("#temp").textContent);
// let speed = parseFloat(document.querySelector("#speed").textContent);
// let windchill = "";

// if (temp <= 50 && speed > 3) {
//   windchill = windChill(temp, speed);
//   windchill = `${windchill}&#176;F`;
// } else {
//   windchill = "N/A";
// }
// // output
// document.querySelector("#wind").innerHTML = windchill;

// function windChill(temp, speed) {
//   let value = Math.round(
//     35.74 +
//       0.6215 * temp -
//       35.75 * Math.pow(speed, 0.16) +
//       0.4275 * temp * Math.pow(speed, 0.16)
//   );
//   return value;
// }