class Weather {


    constructor(city) {
        this.apiKey = '87a1d3e6e2a8630261d86df0f6647822'
        this.city = city


    }


    // Fetch weather from Api 
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
        const responseData = await response.json()

        return responseData
    }

    // Change Weather Location

    changeLocation(city) {
        this.city = city
    }
}