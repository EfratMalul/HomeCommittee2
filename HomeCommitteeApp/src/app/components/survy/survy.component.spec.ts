import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvyComponent } from './survy.component';

describe('SurvyComponent', () => {
  let component: SurvyComponent;
  let fixture: ComponentFixture<SurvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
