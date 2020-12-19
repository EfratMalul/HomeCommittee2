import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpenditureComponent } from './main-expenditure.component';

describe('MainExpenditureComponent', () => {
  let component: MainExpenditureComponent;
  let fixture: ComponentFixture<MainExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
