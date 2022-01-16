import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidNavbarComponent } from './mid-navbar.component';

describe('MidNavbarComponent', () => {
  let component: MidNavbarComponent;
  let fixture: ComponentFixture<MidNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
