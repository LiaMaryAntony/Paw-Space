import { TestBed } from '@angular/core/testing';

import { DogListService } from './dog-list.service';

describe('DogListServiceTsService', () => {
  let service: DogListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
