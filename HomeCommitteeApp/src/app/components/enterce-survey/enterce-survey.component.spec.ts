import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterceSurveyComponent } from './enterce-survey.component';

describe('EnterceSurveyComponent', () => {
  let component: EnterceSurveyComponent;
  let fixture: ComponentFixture<EnterceSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterceSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterceSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
