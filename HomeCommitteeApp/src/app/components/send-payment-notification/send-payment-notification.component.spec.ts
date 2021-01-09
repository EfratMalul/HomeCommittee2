import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPaymentNotificationComponent } from './send-payment-notification.component';

describe('SendPaymentNotificationComponent', () => {
  let component: SendPaymentNotificationComponent;
  let fixture: ComponentFixture<SendPaymentNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPaymentNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPaymentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
