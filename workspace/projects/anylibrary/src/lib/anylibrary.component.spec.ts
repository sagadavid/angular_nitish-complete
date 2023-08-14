import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnylibraryComponent } from './anylibrary.component';

describe('AnylibraryComponent', () => {
  let component: AnylibraryComponent;
  let fixture: ComponentFixture<AnylibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnylibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnylibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
