import { Component, OnInit } from '@angular/core';

import {DockerSystemService} from '../docker.system.service';

@Component({
  selector: 'system-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sysInfo:any;
  tiles = [
    {text: 'One', cols: 3, rows: 2, color: '#3F51B5'},
    {text: 'Two', cols: 1, rows: 4, color: '#E91E63'},
    {text: 'Three', cols: 1, rows: 2, color: '#7986CB'},
    {text: 'Four', cols: 2, rows: 2, color: '#FF80AB'},
    {text: 'Five', cols: 2, rows: 1, color: '#E91E63'},
    {text: 'Six', cols: 2, rows: 1, color: '#3F51B5'},
  ];
  constructor(private dockerSystemService:DockerSystemService) { }
  ngOnInit() {
    this.getSystemInfo();
  }
  getSystemInfo(){
    this.dockerSystemService.getSysInfo().subscribe((sysInfo)=>{
      this.sysInfo = sysInfo;
      this.tiles[0].text = this.sysInfo.Containers+" Containers";
      this.tiles[1].text = this.sysInfo.ContainersRunning+" Containers Running";
      this.tiles[2].text = this.sysInfo.ContainersPaused+" Containers Paused";
      this.tiles[3].text = this.sysInfo.ContainersStopped+" Containers Stopped";
      this.tiles[4].text = this.sysInfo.Images +" Images";
      this.tiles[5].text = this.sysInfo.NCPU +" CPUs";
    });
  }

}
