import { TestBed } from '@angular/core/testing';

import { HadiService } from './hadi.service';

describe('HadiService', () => {
  let service: HadiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HadiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
