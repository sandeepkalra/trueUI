import { TestBed, inject } from '@angular/core/testing';

import { ConnectBackendService } from './connect-backend.service';

describe('ConnectBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectBackendService]
    });
  });

  it('should be created', inject([ConnectBackendService], (service: ConnectBackendService) => {
    expect(service).toBeTruthy();
  }));
});
