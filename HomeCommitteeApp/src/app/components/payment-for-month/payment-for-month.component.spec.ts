import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentForMonthComponent } from './payment-for-month.component';

describe('PaymentForMonthComponent', () => {
  let component: PaymentForMonthComponent;
  let fixture: ComponentFixture<PaymentForMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentForMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentForMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
