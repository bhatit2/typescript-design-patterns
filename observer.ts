/**Here wearther station is subject because other classes will monitor it for temp updates. Other 
 * mniyoring classes are called observers as they are observing the subject.
 */
interface Subject{
    registerObserver(o : Observer);
    deleteObserver(o : Observer);
    notifyObserver();
}

interface Observer{
    update(temperature : number);
}

 class WeatherStation implements Subject{
    private temperature: number;
    private observers : Observer[] = [];
    setTemperature(temp : number){
        this.temperature = temp;
        this.notifyObserver();
    }
    registerObserver(o : Observer){
        this.observers.push(o);
    }
    deleteObserver(o : Observer){
        const index = this.observers.indexOf(o);
        this.observers.splice(index,1);
    }

    notifyObserver(){
        this.observers.forEach(observer=>{
            observer.update(this.temperature);
        })
    }

}

class TemperatureDisplay implements Observer{
    private temperature : number;
    private subject : Subject;
    constructor(weatherStation : Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temp){
        this.temperature = temp;
        console.log("temperature updated");
    }
    
}

class Fan implements Observer{
    private temperature : number;
    private subject : Subject;
    constructor(weatherStation : Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temp){
        this.temperature = temp;
        if(temp < 20){
            console.log("turn fan off");
        } else{
            console.log("turn fan on");
        }
    }
    
}

let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);
weatherStation.setTemperature(15);
weatherStation.setTemperature(30);