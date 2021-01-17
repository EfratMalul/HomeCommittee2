import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformitionComponent } from './informition.component';

describe('InformitionComponent', () => {
  let component: InformitionComponent;
  let fixture: ComponentFixture<InformitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
