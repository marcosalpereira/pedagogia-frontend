import { TestBed } from '@angular/core/testing';

import { ModelUtilService } from './model-util.service';

describe('ModelUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelUtilService = TestBed.get(ModelUtilService);
    expect(service).toBeTruthy();
  });
});
