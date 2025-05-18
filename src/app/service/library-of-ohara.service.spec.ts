import { TestBed } from '@angular/core/testing';

import { LibraryOfOharaService } from './library-of-ohara.service';

describe('LibraryOfOharaService', () => {
  let service: LibraryOfOharaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryOfOharaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
