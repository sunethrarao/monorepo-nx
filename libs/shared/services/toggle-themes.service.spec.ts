import { TestBed } from '@angular/core/testing';

import { ToggleThemesService } from './toggle-themes.service';

describe('ToggleThemesService', () => {
  let service: ToggleThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
