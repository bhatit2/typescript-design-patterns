var WeatherStation = (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        this.temperature = temp;
        this.notifyObserver();
    };
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.deleteObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.temperature);
        });
    };
    return WeatherStation;
})();
var TemperatureDisplay = (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temp) {
        this.temperature = temp;
        console.log("temperature updated");
    };
    return TemperatureDisplay;
})();
var Fan = (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temp) {
        this.temperature = temp;
        if (temp < 20) {
            console.log("turn fan off");
        }
        else {
            console.log("turn fan on");
        }
    };
    return Fan;
})();
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(15);
weatherStation.setTemperature(30);
