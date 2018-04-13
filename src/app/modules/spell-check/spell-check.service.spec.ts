import { TestBed, inject } from '@angular/core/testing';

import { SpellCheckService } from './spell-check.service';

describe('SpellCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpellCheckService]
    });
  });

  it('should be created', inject([SpellCheckService], (service: SpellCheckService) => {
    expect(service).toBeTruthy();
  }));
});
