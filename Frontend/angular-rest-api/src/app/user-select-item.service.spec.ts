import { TestBed } from '@angular/core/testing';

import { UserSelectItemService } from './user-select-item.service';

describe('UserSelectItemService', () => {
  let service: UserSelectItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSelectItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
