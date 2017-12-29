import { TestBed, inject } from '@angular/core/testing';

import { Docker.ImageService } from './docker.image.service';

describe('Docker.ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Docker.ImageService]
    });
  });

  it('should be created', inject([Docker.ImageService], (service: Docker.ImageService) => {
    expect(service).toBeTruthy();
  }));
});
