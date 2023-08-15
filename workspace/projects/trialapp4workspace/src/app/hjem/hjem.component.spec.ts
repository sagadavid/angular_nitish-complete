import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HjemComponent } from './hjem.component';

describe('HjemComponent', () => {
  let component: HjemComponent;
  let fixture: ComponentFixture<HjemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HjemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HjemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
