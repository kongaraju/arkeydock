import { TestBed, inject } from '@angular/core/testing';

import { DockerContainerService } from './docker.container.service';

describe('DockerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerContainerService]
    });
  });

  it('should be created', inject([DockerContainerService], (service: DockerContainerService) => {
    expect(service).toBeTruthy();
  }));
});
