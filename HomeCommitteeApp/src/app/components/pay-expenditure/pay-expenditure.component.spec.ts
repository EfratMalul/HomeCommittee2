import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayExpenditureComponent } from './pay-expenditure.component';

describe('PayExpenditureComponent', () => {
  let component: PayExpenditureComponent;
  let fixture: ComponentFixture<PayExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
