import { TestBed } from '@angular/core/testing';

import { CrudmodelService } from './crudmodel.service';

describe('CrudmodelService', () => {
  let service: CrudmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
