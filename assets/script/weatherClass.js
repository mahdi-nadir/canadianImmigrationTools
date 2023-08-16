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
        this.condition = '';
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
            this.result.scrollIntoView({ behavior: 'smooth' });
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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${this.API_KEY[Math.floor(Math.random() * this.API_KEY.length)]}&units=metric`);
            const json = await response.json();
            this.temperature = Math.round(parseFloat(json.main.temp))
            this.humidity = json.main.humidity;
            this.windSpeed = json.wind.speed;
            // this.weatherIcon = json.weather[0].icon;
            this.condition = json.weather[0].main;
            this.result.innerHTML = `
            <div class="flex flex-col items-center justify-center gap-8">
                <div class="flex flex-col items-center justify-center">
                    <p class="text-3xl font-bold">${this.city.charAt(0).toUpperCase() + this.city.slice(1)}</p>
                    <img src="assets/images/weather_icons/${this.condition}.png" alt="weather icon" class="w-20 md:w-30 h-20 md:h-30 mt-1">
                    <div class="flex flex-row items-center justify-between gap-6">
                        <p class="text-2xl font-bold" id="degree">${this.temperature}°C</p>
                        <p class="text-2xl font-bold">${this.condition}</p>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center gap-6 md:gap-10">
                    <div class="flex flex-row items-center justify-center">
                        <img src="assets/images/weather_icons/humidity.png" alt="weather icon" class="w-5 md:w-8 h-5 md:h-8">
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-sm font-bold">${this.humidity}%</p>
                            <p class="text-sm">Humidity</p>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-2">
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-sm font-bold">${this.windSpeed} km/h</p>
                            <p class="text-sm">Wind Speed</p>
                        </div>
                        <img src="assets/images/weather_icons/winnd.png" alt="weather icon" class="w-5 md:w-8 h-6 md:h-10">
                    </div>
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