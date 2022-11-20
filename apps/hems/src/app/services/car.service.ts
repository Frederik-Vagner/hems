import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CarService {
    constructor(private http: HttpClient) {}

    public getCar(createdAt: Date): Observable<ICar[]> {
        return this.http.get<ICar[]>(
        `${env.apiUrl}/cars?createdAt=${createdAt.toISOString()}`    
        );
    }
}