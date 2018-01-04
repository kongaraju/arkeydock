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
    {number:0, text: '', cols: 1, rows: 2, color: '#7986CB', icon:"dashboard"},
    {number:0,text: '', cols: 1, rows: 2, color: '#E91E63', icon:"play_arrow"},
    {number:0,text: '', cols: 1, rows: 2, color: '#3F51B5', icon:"pause"},
    {number:0,text: '', cols: 1, rows: 2, color: '#FF80AB', icon:"stop"},
    {number:0,text: '', cols: 2, rows: 2, color: '#E91E63', icon:"store"},
    {number:0,text: '', cols: 2, rows: 2, color: '#3F51B5', icon:"memory"},
  ];
  constructor(private dockerSystemService:DockerSystemService) { }
  ngOnInit() {
    this.getSystemInfo();
  }
  getSystemInfo(){
    this.dockerSystemService.getSysInfo().subscribe((sysInfo)=>{
      this.sysInfo = sysInfo;
      this.tiles[0].text = "Containers";
      this.tiles[0].number = this.sysInfo.Containers;

      this.tiles[1].text = "Running";
      this.tiles[1].number = this.sysInfo.ContainersRunning;

      this.tiles[2].text = "Paused";
      this.tiles[2].number = this.sysInfo.ContainersPaused;

      this.tiles[3].text = "Stopped";
      this.tiles[3].number = this.sysInfo.ContainersStopped;

      this.tiles[4].text = "Images";
      this.tiles[4].number = this.sysInfo.Images;

      this.tiles[5].text = "CPUs";
      this.tiles[5].number = this.sysInfo.NCPU;
    });
  }

}
