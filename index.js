let input = document.querySelector('.input');
let button = document.querySelector('.button');
let cityParagraph = document.querySelector('.city');
let main = document.querySelector('.main');


let weatherData = {
    baku: {
        temp: { day: 23, night: 12 },
        wind: { speed: '23 km/h' },
        humidity: { day: "50%", night: '23%' },
        locat: { city_name: 'Baku', country: "Azerbaijan", timezone: { tm: 14400, shortN: 'AZ/Baku' } }
    },
   
    sumgayit: {
        temp: { day: 20, night: 10 },
        wind: { speed: '33 km/h'},
        humidity: { day: '64%', night: '18%'},
        locat: { city_name: 'Sumgayit', country: 'Azerbaijan', timezone: { tm: 20000, shortN: 'AZ/Sumgayit'}}
    },

    ganja: {
        temp: { day: 22, night: 13 },
        wind: { speed: '10 km/h'},
        humidity: { day: '10%', night: '8%'},
        locat: { city_name: 'Sumgayit', country: 'Azerbaijan', timezone: { tm: 12000, shortN: 'AZ/Ganja'}}
    } 
};

button.addEventListener('click', function(){
    let cityName = input.value.toLowerCase();
    
    let cityData = weatherData[cityName];
    
    if(cityData) {
        cityParagraph.textContent = cityData.locat.city_name;
        main.innerHTML = `
            <p>Temperature:<br> Day: ${cityData.temp.day}°C, Night: ${cityData.temp.night}°C</p>
            <p>Wind Speed: ${cityData.wind.speed}</p>
            <p>Humidity:<br> Day: ${cityData.humidity.day}, Night: ${cityData.humidity.night}</p>
            <p>Timezone: ${cityData.locat.timezone.shortN}</p>
        `;

        cityParagraph.style.color = 'blue';
        
    } else {
        cityParagraph.textContent = "City not found";
        main.innerHTML = "";
    }
    input.value = ''
});
