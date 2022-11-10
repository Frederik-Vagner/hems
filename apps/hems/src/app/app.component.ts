import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IMessage } from '@hems/interfaces';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'hems-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<IMessage>(`${env.apiUrl}/hello`);
  constructor(private http: HttpClient) {}
}
