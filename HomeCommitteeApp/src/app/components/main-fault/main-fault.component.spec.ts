import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFaultComponent } from './main-fault.component';

describe('MainFaultComponent', () => {
  let component: MainFaultComponent;
  let fixture: ComponentFixture<MainFaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
