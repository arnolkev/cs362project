import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HUserDashComponent } from './h-user-dash.component';

describe('HUserDashComponent', () => {
  let component: HUserDashComponent;
  let fixture: ComponentFixture<HUserDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HUserDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HUserDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
