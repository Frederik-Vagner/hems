/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'hems-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  interval: any;
  componentHeight = 0;

  city = 'Copenhagen';

  ngOnInit() {
    const el = document.getElementById('clickBlock');
    const el2 = document.getElementById('weatherContainer');
    this.interval = setInterval(() => {
      if(el2 && el) {
        this.componentHeight = el2.offsetHeight - 26
      }
    }, 500)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
