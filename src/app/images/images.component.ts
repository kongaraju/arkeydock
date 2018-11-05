import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DockerImageService } from './docker.image.service';
import { DockerContainerService } from '../containers/docker.container.service';
import { Image } from './image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dockerImageService: DockerImageService, 
    private dockerContainerService: DockerContainerService) { 

    }
  images: Image[];
  imageSearchResults: Image[];
  searchTerm: string;
  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.dockerImageService.getImages().subscribe((images: Image[]) => {
      this.images = this.filterValidImages(images);
    });
  }
  deleteImage(imageId: string) {
    this.dockerImageService.removeImage(imageId).subscribe(() => {
      this.getImages();
    });
  }
  searchImages() {
    this.dockerImageService.searchImages(this.searchTerm).subscribe((images: Image[]) => {
      this.imageSearchResults = images;
    });
  }
  createContainer(image) {
    this.dockerContainerService.createContainer(this.stripImagePath(image.RepoTags[0]), image.RepoTags[0]).subscribe(() => {
      this.router.navigate(['/containers']);
    });
  }
  onRemove(image) {
    this.deleteImage(image.Id);
  }
  onCreate(image) {
    this.createContainer(image);
  }
  filterValidImages(images) {
    return images.filter((image) => {
      return image.RepoTags && image.RepoTags[0] != "<none>:<none>";
    })
  }
  stripImagePath(image: string): string {
    let lastIndexOfSlash: number = image.lastIndexOf('/');
    let imageNameWithTag = lastIndexOfSlash != -1 ? image.substr(lastIndexOfSlash + 1, image.length) : image;
    let lastIndexOfColon: number = imageNameWithTag.lastIndexOf(':');
    return lastIndexOfColon != -1 ? imageNameWithTag.substr(0, lastIndexOfColon) : imageNameWithTag;
  }
  stripImageTag(image: string): string {
    let lastIndexOfSlash: number = image.lastIndexOf('/');
    let imageNameWithTag = lastIndexOfSlash != -1 ? image.substr(lastIndexOfSlash + 1, image.length) : image;
    let lastIndexOfColon: number = imageNameWithTag.lastIndexOf(':');
    return lastIndexOfColon != -1 ? imageNameWithTag.substr(lastIndexOfColon + 1, imageNameWithTag.length) : imageNameWithTag;
  }
  stripDigestPath(repoDigests: any): string {
    if (!repoDigests) return "local-library";
    let registry = repoDigests[0];
    let indexOfSlash: number = registry.indexOf('/');
    let registryNameWithSha = indexOfSlash != -1 ? registry.substr(0, indexOfSlash) : registry;
    let indexOfSha: number = registryNameWithSha.indexOf('@sha');
    return indexOfSha != -1 ? registryNameWithSha.substr(0, indexOfSha) : registryNameWithSha;;
  }

}
