import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from './image';

import { AppContext } from '@app/app.context';
import { DockerService } from '@app/base-docker.service';

import { Observable ,  of } from 'rxjs';

@Injectable()
export class DockerImageService extends DockerService {

  constructor(private http: HttpClient) {
    super();
  }
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.dockerApiUrl + "images/json");
  }
  searchImages(searchTerm: string): Observable<Image[]> {
    return this.http.get<Image[]>(this.dockerApiUrl + "images/search?limit=100&term=" + searchTerm);
  }
  removeImage(imageId: string): Observable<object> {
    return this.http.delete<object>(this.dockerApiUrl + "images/" + imageId);
  }

}
