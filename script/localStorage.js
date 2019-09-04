//Stores latest city within local storage.
class Storage{
    constructor(){
        this.city;
        this.defaultCity = "Toronto";
    }
    // Setting to a new city.
    setLocationData(city,state){
        localStorage.setItem('city',city);
    }
    //Getting current city.
    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }
        return{
            city: this.city
        }
    }
}