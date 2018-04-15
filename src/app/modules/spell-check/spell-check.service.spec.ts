import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SpellCheckService } from './spell-check.service';

describe('SpellCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [SpellCheckService]
    });
  });

  it('should be created', inject([SpellCheckService], (service: SpellCheckService) => {
    expect(service).toBeTruthy();
  }));
});
