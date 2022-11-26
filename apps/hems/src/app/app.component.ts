import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCarComponent } from './pages/cars/modal/create/create.car.component';

@Component({
  selector: 'hems-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HEMS';
  sidebarCollapsed = false;

  constructor(public router: Router, private snackBar: MatSnackBar) {
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
            this.title = 'Check In / Out';
            break;
          case '/daily-tasks':
            this.title = 'Daily Tasks';
            break;
          case '/assignments':
            this.title = 'Assignments';
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
}
