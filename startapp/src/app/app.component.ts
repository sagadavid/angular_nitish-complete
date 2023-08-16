import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'dave';
  isDisabled: boolean = false;
  txtId = 'sampleId';
  //customClass = { farge: this.isDisabled, storrelse: this.boo() };
  src =
    'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
  alt = 'unsplash photo';
  width = 200;

  bindendeStyle = 'color:green; font-style:italic';

  clickSave(): void {
    //alert('you saved it ! ');
    this.name = 'name updated';
  }

  musOver(): void {
    this.name = 'back to dave';
  }

  bytTxt(): void {
    this.name = 'navn endring akseptert !';
  }
  boo() {
    return true;
  }
}
