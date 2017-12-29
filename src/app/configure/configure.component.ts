import { Component, OnInit } from '@angular/core';
import { Configuration } from './configuration';
import { DockerSystemService } from '../docker.system.service';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  constructor(private dockerSystemService: DockerSystemService) { }
  protocols: Array<object> = [{ value: "http", text: "HTTP" }, { value: "https", text: "HTTPs" }];
  protocol: string = "http";
  host: string = "localhost";
  port: number = 2375;
  apiUrl: string = this.protocol + "://" + this.host + ":" + this.port + "/";
  connectionSuccess:boolean = false;
  getConfiguration(): Configuration {
    return new Configuration();
  }
  getGivenUrl():string{
    return this.protocol + "://" + this.host + ":" + this.port + "/";
  }
  testConnection() {
    this.dockerSystemService.testConnection(this.getGivenUrl()).subscribe((status:string) => {
      if(status=="OK"){
        this.connectionSuccess = true;
        alert("Connection Successful");
      }
    },(errResp)=>{
      alert(errResp.statusText);
    });
  }
  ngOnInit() {
  }

}
