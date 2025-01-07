import { TestBed } from '@angular/core/testing';

import { TrasactionService } from './trasaction.service';

describe('TrasactionService', () => {
  let service: TrasactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
