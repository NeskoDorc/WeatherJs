class Ui {

    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather) {

        this.location.textContent = weather.name

        // weather.description
        this.desc1 = weather.weather

        this.desc1.forEach(element => {
            this.desc.textContent = element.description

        });

        this.string.textContent = `Temp: ${weather.main.temp}C`
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`
        this.feelsLike.textContent = `Feels Like :${weather.main.feels_like}C`
        this.dewpoint.textContent = weather.name
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}M/S`


    }
}