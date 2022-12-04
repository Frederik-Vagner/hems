import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { DisplayDateService } from './services/display-date.service';

@Component({
  selector: 'hems-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HEMS';
  sidebarCollapsed = false;
  displayDate = new Date();

  constructor(
    public router: Router,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar
  ) {
    this.displayDateService
      .getDisplayDateSubject()
      .subscribe((date) => (this.displayDate = new Date(date)));

    this.router.events.subscribe(async (val) => {
      if (val instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/dashboard':
            this.title = 'Dashboard';
            break;
          case '/account':
            this.title = 'Account';
            break;
          case '/luggage-list':
            this.title = 'Luggage List';
            break;
          case '/car-list':
            this.title = 'Car List';
            break;
          case '/checkin':
            this.title = 'Check In';
            break;
          case '/checkout':
            this.title = 'Check Out';
            break;
          case '/daily-tasks':
            this.title = 'Daily Tasks';
            break;
          case '/assignments':
            this.title = 'Bell Boy Assignment Sheet';
            break;
          case '/long-term':
            this.title = 'Long Term';
            break;
          default:
            this.title = 'Page Not Found';
            break;
        }
      }
    });
  }

  /**
   * Toggles the `sidebarCollapsed` boolean.
   */
  toggleCollapsed(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  /**
   * Remove the logged in user information from local storage and API
   */
  logout() {
    this.snackBar.open('You have logged out', `You're joking, right?`, {
      duration: 5000,
    });
  }

  onDisplayDateChange() {
    this.displayDateService.setDisplayDate(this.displayDate);
  }
}
