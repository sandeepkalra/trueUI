import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCompleteComponent } from './log-in-complete.component';

describe('LogInCompleteComponent', () => {
  let component: LogInCompleteComponent;
  let fixture: ComponentFixture<LogInCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
