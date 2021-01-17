import { TestBed } from '@angular/core/testing';

import { SurvyService } from './survy.service';

describe('SurvyService', () => {
  let service: SurvyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurvyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
