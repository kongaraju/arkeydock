import { Component, OnInit } from '@angular/core';
import { Configuration } from './configuration';
import {MessageBoxComponent} from '../dialogs/message-box/message-box.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DockerSystemService } from '../docker.system.service';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  constructor(private dockerSystemService: DockerSystemService, public dialog: MatDialog) { }
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

        let dialogRef = this.dialog.open(MessageBoxComponent, {
          width: '450px',      
          data: { title: "Status", message: "Connection Successful" }
        });
        alert("Connection Successful");
      }
    },(errResp)=>{

      let dialogRef = this.dialog.open(MessageBoxComponent, {
        width: '450px',      
        data: { title: errResp.statusText, message: errResp.error.message }
      });
      alert(errResp.statusText);
    });
  }
  ngOnInit() {
  }

}
