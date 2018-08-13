import { TestBed, inject } from '@angular/core/testing';

import { TogglerService } from './toggler.service';

describe('TogglerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TogglerService]
    });
  });

  it('should be created', inject([TogglerService], (service: TogglerService) => {
    expect(service).toBeTruthy();
  }));
});
