class UI {
    constructor() {
        this.profile = document.getElementById('results');
    }
    //Creating html and inserting into the document
    addProfile(input) {
        console.log(input);
        //Input table for each search
        this.profile.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto text-center mt-5 p-5 rounded" id="tempId">
                <h1 id="w-location">${input.weather.name}</h1>
                <h3 id="w-desc" class="text-dark">${input.weather.weather[0].description}</h3>
                <h3 id="w-string">${Math.round((input.weather.main.temp-273.15) * 100) / 100} C</h3>
                <img>
                <div class="center col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item">Current Humidity: ${input.weather.main.humidity}%</li>
                        <li class="list-group-item">Lowest Temperature Point ${Math.round((input.weather.main.temp_min-273.15) * 100) / 100} C</li>
                        <li class="list-group-item">Highest Temperature Point ${Math.round((input.weather.main.temp_max-273.15) * 100) / 100} C</li>
                        <li class="list-group-item">Wind Speed ${input.weather.wind.speed} MPH At Degree ${input.weather.wind.deg}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `;
        //Calls set for back ground
        this.setBackground(input);
    }
    //Setting a background based on the weather conditions.
    setBackground(input){
        if(input.weather.weather[0].main === "Clear"){
            document.getElementById("tempId").id = 'clearskyBackGround';
        }else if(input.weather.weather[0].main === "Rain" ||input.weather.weather[0].main === "Drizzle"){
            document.getElementById("tempId").id = 'rainingBackGround';
        }else if(input.weather.weather[0].main === "Snow"){
            document.getElementById("tempId").id = 'snowBackGround';
        }else if(input.weather.weather[0].main === "Thunderstorm"){
            document.getElementById("tempId").id = 'lightningBackGround';
        }else{
            document.getElementById("tempId").id = 'cloudyBackGroud';
        }
    }
}