/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'hems-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  weatherData: any;
  weatherForecast: any;
  isLoading = true;
  interval: any;

  city = 'Copenhagen';

  ngOnInit() {
    this.fetchWeatherData();
    this.fetchForecastData();
    // Refetch data every 60 sec
    this.interval = setInterval(() => this.fetchWeatherData(), 60000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  fetchWeatherData(): void {
    this.isLoading = true;
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ec87279630ccc1c41b862571e615ab5b&units=metric'
    )
      .then((response) => response.json())
      .then((data) => {
        this.weatherData = data;
        this.isLoading = false;
      });
  }

  fetchForecastData(): void {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=55.6759&lon=12.5655&appid=ec87279630ccc1c41b862571e615ab5b&units=metric'
    )
      .then((response) => response.json())
      .then((data) => {
        this.weatherForecast = [
          data.list[8],
          data.list[16],
          data.list[24],
          data.list[32],
        ];
      });
  }

  getImgUrl(iconName: string): string {
    return `http://openweathermap.org/img/wn/${iconName}@2x.png`;
  }

  getNumber(temp: string): string {
    return parseFloat(temp).toFixed(0);
  }

  getDate(date: string) {
    return new Date(date).toDateString().slice(0, 3);
  }
}
