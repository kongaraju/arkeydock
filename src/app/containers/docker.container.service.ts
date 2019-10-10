import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Container } from './container';

import { Observable ,  of } from 'rxjs';

@Injectable()
export class DockerContainerService {
  private dockerApiUrl = 'http://localhost:2375/';  // URL to docker api
  constructor( private http: HttpClient) { }
  getContainers(): Observable<Container[]> {
    return this.http.get<Container[]>(this.dockerApiUrl+'containers/json?all=true');
  }
  getContainerLogs(containerId:string):Observable<string>{
    return this.http.get(this.dockerApiUrl+'containers/'+containerId+'/logs?follow=false&stderr=true&stdout=true&timestamps=false', {"responseType": "text"});
  }
  createContainer(name = "newContainer", imageId:string=""):Observable<any>{
    return this.http.post<any>(this.dockerApiUrl+'containers/create?name='+name, {Image:imageId});
  }
  inspectContainer(containerId:string):Observable<string>{
    return this.http.get<any>(this.dockerApiUrl+'containers/'+containerId+'/json');
  }
  startContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/start',{});
  }
  stopContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/stop',{});
  }
  restartContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/restart',{});
  }
  removeContainer(containerId:string):Observable<string>{
    return this.http.delete<any>(this.dockerApiUrl+'containers/'+containerId);
  }
  pauseContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/pause',{});
  }
  unpauseContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/unpause',{});
  }
  killContainer(containerId:string):Observable<string>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/kill', {});
  }
  renameContainer(containerId:string, newName:string):Observable<any>{
    return this.http.post<any>(this.dockerApiUrl+'containers/'+containerId+'/rename?name='+newName,{});
  }
  getContainerFSInfo(containerId: string, path:string="/var"):Observable<any>{
    return this.http.head<any>(this.dockerApiUrl+'containers/'+containerId+'/archive?path='+path);
  }
  getContainerProcesses(containerId: string):Observable<any>{
    return this.http.get(this.dockerApiUrl+'containers/'+containerId+'/top');
  }
}
