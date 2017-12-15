import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardProfileComponent } from './my-dashboard-profile.component';

describe('MyDashboardProfileComponent', () => {
  let component: MyDashboardProfileComponent;
  let fixture: ComponentFixture<MyDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
