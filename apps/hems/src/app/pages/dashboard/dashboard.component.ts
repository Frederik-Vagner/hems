import { Component } from '@angular/core';

@Component({
  selector: 'hems-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  random = Math.random() > 0.5;
}
