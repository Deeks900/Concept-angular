import { TestBed } from '@angular/core/testing';

import { TryThisService } from './try-this.service';

describe('TryThisService', () => {
  let service: TryThisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryThisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
