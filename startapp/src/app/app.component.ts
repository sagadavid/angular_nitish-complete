import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'startapp';
  name: string = 'dave';
  employees = ['elias', 'jon', 'sneeky'];

  employX = {
    name: 'eli',
    salary: 120,
    title: 'arkitekt',
    src: 'https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
    alt: 'profile photo',
  };

  getName(data?: number): string {
    if (data) {
      return 'hi data' + data;
    } else {
      return 'hi no data';
    }
  }
}
