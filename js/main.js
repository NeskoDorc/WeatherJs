// Init Local Storig 

const storage = new Storage()
    // Get stored location data 
const weatherLocation = storage.getLocationData()


// Init Ui object 
const ui = new Ui()


// Init weather object

const weather = new Weather(weatherLocation.city)

//Get Weather when Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// C = K – 273.15


// Change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value

    weather.changeLocation(city)

    // set Location in Local storige  
    storage.setLocationData(city)
        // get and display weather 
    getWeather()
        // Close model 
    $('#locModal').modal('hide');


})



function getWeather() {


    weather.getWeather()
        .then(results => {
            console.log(results)
            ui.paint(results)
        })
        .catch(err => console.log(err))

}