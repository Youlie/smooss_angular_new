import { TestBed, inject } from '@angular/core/testing';

import { SmoossRestService } from './smooss-rest.service';

describe('SmoossRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmoossRestService]
    });
  });

  it('should be created', inject([SmoossRestService], (service: SmoossRestService) => {
    expect(service).toBeTruthy();
  }));
});
