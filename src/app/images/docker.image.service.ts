import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from './image';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DockerImageService {
  private dockerApiUrl = 'http://localhost:2375/';  // URL to docker api
  constructor(private http:HttpClient) { }
  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>(this.dockerApiUrl+"images/json");
  }
  searchImages(searchTerm:string): Observable<Image[]>{
    return this.http.get<Image[]>(this.dockerApiUrl+"images/search?limit=100&term="+searchTerm);
  }
  removeImage(imageId:string):Observable<object>{
    return this.http.delete<object>(this.dockerApiUrl+"images/"+imageId);
  }

}
