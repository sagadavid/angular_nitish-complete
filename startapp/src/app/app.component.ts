import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees = ['jimmy', 'jonny', 'jenny', 'jacky'];
  employeesList = [
    { name: 'weli', salary: '1300', location: 'uk' },
    { name: 'eli', salary: '1100', location: 'usa' },
    { name: 'deli', salary: '700', location: 'sweden' },
    { name: 'reli', salary: '1400', location: 'danmark' },
  ];
  refresh(): void {
    this.employeesList = [
      { name: 'weli', salary: '1300', location: 'uk' },
      { name: 'eli', salary: '1100', location: 'usa' },
      { name: 'deli', salary: '700', location: 'sweden' },
      { name: 'reli', salary: '1400', location: 'danmark' },
      { name: 'emmet', salary: '3200', location: 'norway' },
    ];
  }

  trackEmpRefresh(index: number, employee: any): string {
    return employee.name;
    //thus, only the changed employee is refreshed. good for performance!
  }
}
