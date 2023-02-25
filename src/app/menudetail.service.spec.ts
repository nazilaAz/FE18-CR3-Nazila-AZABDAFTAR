import { TestBed } from '@angular/core/testing';

import { MenudetailService } from './menudetail.service';

describe('MenudetailService', () => {
  let service: MenudetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
