import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCommitteComponent } from './pay-committe.component';

describe('PayCommitteComponent', () => {
  let component: PayCommitteComponent;
  let fixture: ComponentFixture<PayCommitteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCommitteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
