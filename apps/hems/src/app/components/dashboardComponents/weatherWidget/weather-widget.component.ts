import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hems-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: any;
  weatherForecast: any;

  city = 'Copenhagen';

  currentTemp = '2';
  currentMax = '';
  currentMin = '';
  currentWeather = 'sun';
  currentWeatherIconUrl = '';
  currentWind = '13';

  ngOnInit() {
    this.getWeatherData();
    this.getForecastData();
    setInterval(() => this.getWeatherData(), 60000);
  }

  getWeatherData(): void {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ec87279630ccc1c41b862571e615ab5b&units=metric'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      })
      .then(() => console.log(this.weatherData, this.weatherData.main));
  }

  getForecastData(): void {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=55.6759&lon=12.5655&appid=ec87279630ccc1c41b862571e615ab5b&units=metric'
    )
      .then((response) => response.json())
      .then((data) => {
        this.weatherForecast = [data.list[8],data.list[16],data.list[24],data.list[32]]
        console.log(this.weatherForecast)
      });
  }

  setWeatherData(data: any) {
    this.weatherData = data;
    const sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();

    this.currentTemp = parseFloat(this.weatherData.main.temp).toFixed(0);
    this.currentMax = parseFloat(this.weatherData.main.temp_max).toFixed(0);
    this.currentMin = parseFloat(this.weatherData.main.temp_min).toFixed(0);

    this.currentWind = parseFloat(this.weatherData.wind.speed).toFixed(0);

    this.currentWeather = this.weatherData.weather[0].description;
    this.currentWeatherIconUrl = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
  }

  getDate(date: string) {
    return new Date(date).toDateString().slice(0,3);
  }
}
