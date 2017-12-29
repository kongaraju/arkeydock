import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DockerSystemService {
  private dockerApiUrl = 'http://localhost:2375/';
  constructor(private http: HttpClient) { }
  testConnection(url = this.dockerApiUrl): Observable<string> {
    return this.http.get(url + "_ping", {"responseType": "text"});
  }
  getSysInfo():Observable<string> {
    return this.http.get<any>(this.dockerApiUrl + "info");
  }

}
