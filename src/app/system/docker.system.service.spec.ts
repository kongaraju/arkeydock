import { TestBed, inject } from '@angular/core/testing';

import { DockerSystemService } from './docker.system.service';

describe('Docker.SystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerSystemService]
    });
  });

  it('should be created', inject([DockerSystemService], (service: DockerSystemService) => {
    expect(service).toBeTruthy();
  }));
});
