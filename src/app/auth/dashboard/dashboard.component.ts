import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }
  firstName = localStorage.getItem('firstName') || 'Guest';

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
