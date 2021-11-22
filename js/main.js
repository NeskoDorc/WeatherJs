// Init Ui object 
const ui = new Ui()


// Init weather object

const weather = new Weather('Beograd')

//Get Weather when Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// C = K – 273.15


function getWeather() {


    weather.getWeather()
        .then(results => {
            console.log(results)
            ui.paint(results)
        })
        .catch(err => console.log(err))

}