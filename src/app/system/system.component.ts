import { Component, OnInit } from '@angular/core';

import { DockerSystemService } from './docker.system.service';
import {Utils} from './../utils';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent extends Utils implements OnInit {

  constructor(private dockerSystemService: DockerSystemService) {
    super();
   }
  info: any;
  selectSection:string='general';
  ngOnInit() {
    this.getSysInfo();
  }

  getSysInfo() {
    this.dockerSystemService.getSysInfo().subscribe((info) => {
      info.RegistryIndexConfigs =  this.parseIndexConfigs(info.RegistryConfig.IndexConfigs);
      info.SecurityOptionsPairs = this.parseSecurityOptions(info.SecurityOptions);
      info.RuntimesInfo = this.parseRuntimes(info.Runtimes);
      this.info = info;
    })
  }
  parseSecurityOptions(securityOptions){
    let opts = [];
    securityOptions.map((opt)=>{
      opts = opts.concat(opt.split(','));
      return opt.split(',');
    })
    return this.getPairs(opts);
  }
  parseIndexConfigs(indexConfigs){
    let keys = Object.keys(indexConfigs);
    return keys.map((key)=>{
      return indexConfigs[key];
    }); 
  }
  parseRuntimes(runtimes){
    let keys = Object.keys(runtimes);
    return keys.map((runtime)=>{
      return {name : runtime,
      args: Object.entries(runtimes[runtime])};
    });
  }

}
