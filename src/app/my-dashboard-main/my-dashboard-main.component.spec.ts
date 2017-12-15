import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardMainComponent } from './my-dashboard-main.component';

describe('MyDashboardMainComponent', () => {
  let component: MyDashboardMainComponent;
  let fixture: ComponentFixture<MyDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
