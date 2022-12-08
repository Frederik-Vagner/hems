import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hems-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
    weatherData: any;

    ngOnInit() {
        this.getWeatherData()
    }

    getWeatherData(): void {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ec87279630ccc1c41b862571e615ab5b')
        .then(response=>response.json())
        .then(data=>{this.setWeatherData(data);})
        .then(() => console.log(this.weatherData))
    }

    setWeatherData(data: any){
        this.weatherData = data;
        const sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
        this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
        const currentDate = new Date();
        this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
        this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
        this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
        this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
      }
}
