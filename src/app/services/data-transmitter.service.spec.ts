import { TestBed, inject } from '@angular/core/testing';

import { DataTransmitterService } from './data-transmitter.service';

describe('DataTransmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransmitterService]
    });
  });

  it('should be created', inject([DataTransmitterService], (service: DataTransmitterService) => {
    expect(service).toBeTruthy();
  }));
});
