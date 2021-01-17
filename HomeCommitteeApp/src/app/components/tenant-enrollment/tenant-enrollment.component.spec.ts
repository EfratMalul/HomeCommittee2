import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantEnrollmentComponent } from './tenant-enrollment.component';

describe('TenantEnrollmentComponent', () => {
  let component: TenantEnrollmentComponent;
  let fixture: ComponentFixture<TenantEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
