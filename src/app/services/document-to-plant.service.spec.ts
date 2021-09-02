import { TestBed } from '@angular/core/testing';

import { DocumentToPlantService } from './document-to-plant.service';

describe('DocumentToPlantService', () => {
  let service: DocumentToPlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentToPlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
