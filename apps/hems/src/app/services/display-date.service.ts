import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayDateService {
  private displayDateSubject: BehaviorSubject<Date>;

  constructor() {
    this.displayDateSubject = new BehaviorSubject(new Date());
  }

  public getDisplayDateSubject = () => this.displayDateSubject;

  public setDisplayDate = (displayDate: Date) =>
    this.displayDateSubject.next(new Date(displayDate.getTime()));
}
