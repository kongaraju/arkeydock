import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppContext } from '@app/app.context';
import { DockerService } from '@app/base-docker.service';

import { Observable ,  of } from 'rxjs';

@Injectable()
export class DockerSystemService extends DockerService {

  constructor(private http: HttpClient) {
    super();
   }
  testConnection(url = this.dockerApiUrl): Observable<string> {
    return this.http.get(url + "_ping", { "responseType": "text" });
  }
  getSysInfo(): Observable<any> {
    return this.http.get<any>(this.dockerApiUrl + "info");
  }

}
