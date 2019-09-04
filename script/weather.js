class Weather {
    //Initialize city 
    constructor(city) {
        this.city = city
        this.AppID = '9dfecbadc3d9a91d7f41a3fd8dabd066';
        this.unit = 'imperial';
    }
    async getWeather() {
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.AppID}&${this.unit}`);

        const weather = await weatherResponse.json();
        return {
            weather
        }
    }
    changeCity(city){
        this.city = city;
    }
}