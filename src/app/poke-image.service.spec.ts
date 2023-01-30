import { TestBed } from '@angular/core/testing';

import { PokeImageService } from './poke-image.service';

describe('PokeImageService', () => {
  let service: PokeImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
