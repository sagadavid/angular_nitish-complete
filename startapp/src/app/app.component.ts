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
  customClass = { farge: false, storrelse: true };

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
}
