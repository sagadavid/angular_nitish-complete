import { TestBed } from '@angular/core/testing';

import { AnylibraryService } from './anylibrary.service';

describe('AnylibraryService', () => {
  let service: AnylibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnylibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
