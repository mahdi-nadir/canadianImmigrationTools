import weatherapi from './apikey.js';

export default class WeatherClass {
    constructor() {
        this.modalResult = document.querySelector('#modalResult');
        this.cancelBtn = modalResult.querySelectorAll('.cancel');

        this.overlay = document.querySelector('#overlay');

        this.place = document.querySelector('#place');
        // this.degree = document.querySelector('#degree');
        this.getWeather = document.querySelector('#getWeather');
        this.result = document.querySelector('#result');
        this.city = '';
        this.temperature = 0;
        this.humidity = 0;
        this.windSpeed = 0;
        this.weatherIcon = '';
        this.API_KEY = weatherapi;
        this.init();
    }

    init() {
        this.city = '';
        this.overlay.style.display = 'block';
        this.overlay.style.opacity = '0.8';
        this.overlay.style.visibility = 'visible';
        this.modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

        this.place.addEventListener('change', () => {
            if (this.place.value != '') {
                this.getWeather.disabled = false;
            } else {
                this.getWeather.disabled = true;
            }
        })

        this.getWeather.addEventListener('click', async () => {
            this.city = this.place.value;
            this.getWeatherFunction(this.city);
        })

        this.cancelBtn.forEach(element => {
            element.addEventListener('click', () => {
                this.overlay.style.display = 'none';
                this.overlay.style.opacity = '0';
                this.overlay.style.visibility = 'hidden';
                this.modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
                this.modalResult.innerHTML = `
            <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
                <i class="fa-solid fa-xmark"></i>
            </button>
            `;
            });
        })
    }

    async getWeatherFunction(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${this.API_KEY}&units=metric`);
            const json = await response.json();
            console.log(json);
            this.temperature = Math.round(parseFloat(json.main.temp))
            this.humidity = json.main.humidity;
            this.windSpeed = json.wind.speed;
            this.weatherIcon = json.weather[0].icon;
            this.result.innerHTML = `
            <div class="flex flex-col items-center justify-center gap-8">
                <div class="flex flex-col items-center justify-center">
                    <p class="text-3xl font-bold">${this.city.charAt(0).toUpperCase() + this.city.slice(1)}</p>
                    <img src="http://openweathermap.org/img/w/${this.weatherIcon}.png" alt="weather icon" class="w-20 md:w-30 h-20 md:h-30">
                    <p class="text-2xl font-bold" id="degree">${this.temperature}°C</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="text-xl font-bold underline">Humidity:</p>
                    <p class="text-xl font-bold mb-2">${this.humidity}%</p>
                    <p class="text-xl font-bold underline">Wind Speed:</p>
                    <p class="text-xl font-bold">${this.windSpeed} km/h</p>
                </div>
            </div>
            `;
        } catch (error) {
            console.error('Please try again later', error);
            this.result.innerHTML = `
            <div class="flex flex-col items-center justify-center">
            <p class="font-bold text-red-600">Please try again later</p>
            </div>`
        }
    }
}