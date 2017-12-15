import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardWalletComponent } from './my-dashboard-wallet.component';

describe('MyDashboardWalletComponent', () => {
  let component: MyDashboardWalletComponent;
  let fixture: ComponentFixture<MyDashboardWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
