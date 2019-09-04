const storage = new Storage;
const weatherLocation = storage.getLocationData();
//Init Weather
const weather = new Weather(weatherLocation.city);
//Get Stored location data
//Init UI interface
const iu = new UI();

let addButton = document.getElementById('addButton');
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

///Listens to add button then checks user input.
addButton.addEventListener('click', () => {
    const location = document.getElementById('searchLocation').value;

    if (location != '') {
        weather.changeCity(location);
        storage.setLocationData(location);
        getWeather();
    } else {
        console.log("What the fuck");
    }
});

//Cal to load a weather location
function getWeather(){
    weather.getWeather().then(data => {
        if (data.weather.message === "city not found") {
            console.log(data);
        } else {
            iu.addProfile(data);
            // storage.addStorage(data);
        }
    })
}
