import { Component, OnInit } from '@angular/core';
import { Container } from './container';
import { DockerContainerService } from './docker.container.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent extends Utils implements OnInit  {

  constructor(private dockerContainerService: DockerContainerService) {
    super();
  }
  getContainers(): void {
    this.dockerContainerService.getContainers().subscribe(containers => this.containers = containers);
  }
  inspectContainer(containerId: string): void {
    this.dockerContainerService.inspectContainer(containerId).subscribe(container => {
      this.selectedContainerInfo = container;
      this.selectedContainerInfo.envPairs = this.getEnvPairs(this.selectedContainerInfo.Config.Env);
      this.selectedContainerInfo.portConfig = this.getPorts(this.selectedContainerInfo.HostConfig.PortBindings);
      this.selectedContainerInfo.networkPorts = this.getPorts(this.selectedContainerInfo.NetworkSettings.Ports);
      this.selectedContainerInfo.portConfig = this.selectedContainerInfo.portConfig.concat(this.selectedContainerInfo.networkPorts);
      this.selectedContainerInfo.networks = this.getNetworks(this.selectedContainerInfo.NetworkSettings.Networks);
    });
  }
  startContainer(containerId: string): void {
    this.dockerContainerService.startContainer(containerId).subscribe(() => {
      this.getContainers();
    });
  }
  stopContainer(containerId: string): void {
    this.dockerContainerService.stopContainer(containerId).subscribe();
  }
  restartContainer(containerId: string): void {
    this.dockerContainerService.restartContainer(containerId).subscribe();
  }
  removeContainer(containerId: string): void {
    this.dockerContainerService.removeContainer(containerId).subscribe();
  }
  pauseContainer(containerId: string): void {
    this.dockerContainerService.pauseContainer(containerId).subscribe();
  }
  unpauseContainer(containerId: string): void {
    this.dockerContainerService.unpauseContainer(containerId).subscribe();
  }
  killContainer(containerId: string): void {
    this.dockerContainerService.killContainer(containerId).subscribe();
  }
  getContainerLogs(containerId: string): void {
    this.dockerContainerService.getContainerLogs(containerId)
      .subscribe(logs => this.selectedContainerLogs = logs);
  }
  getContainerFSInfo(containerId: string): void {
    this.dockerContainerService.getContainerFSInfo(containerId)
      .subscribe();
  }
  getContainerProcesses(containerId: string): void {
    this.dockerContainerService.getContainerProcesses(containerId)
      .subscribe();
  }
  onSelect(container: Container): void {
    if (this.selectedContainer && this.selectedContainer.Id == container.Id) return;
    this.showSettings = false;
    this.currentView = 'info';
    this.selectedContainer = container;
    if (this.interval) clearInterval(this.interval);
    this.getContainerLogs(this.selectedContainer.Id);
    this.interval = setInterval(this.getContainerLogs.bind(this, this.selectedContainer.Id), 60 * 1000);
    // this.getContainerLogs(this.selectedContainer.Id);
  }
  onRefresh(): void {
    this.selectedContainer = null;
    this.selectedContainerLogs = '';
    this.currentView = 'info';
    if (this.interval) clearInterval(this.interval);
    this.getContainers();
  }
  onStart(selectedContainer): void {
    this.startContainer(selectedContainer.Id);
  }
  onStop(selectedContainer): void {
    this.stopContainer(selectedContainer.Id);
  }
  onRestart(selectedContainer): void {
    this.restartContainer(selectedContainer.Id);
  }
  onRemove(container): void {
    this.removeContainer(container.Id);
  }
  onPause(container):void{
    this.pauseContainer(container.Id);
  }
  onUnpause(container):void{
    this.unpauseContainer(container.Id);
  }
  onKill(container):void{
    this.killContainer(container.Id);
  }
  onInfoToggle(container):void{
    if(this.currentView == 'info') return;
    this.currentView = 'info';
    this.showSettings = !this.showSettings;
  }
  onSettingsToggle(container): void {
    if(this.currentView == 'settings') return;
    this.currentView = 'settings';
    this.showSettings = !this.showSettings;
    this.inspectContainer(container.Id);
    //this.getContainerFSInfo(container.Id);
    //this.getContainerProcesses(container.Id);
  }

  showSettings: boolean;
  selectedContainerInfo: any;
  selectedContainerLogs: string;
  interval: any;
  selectedContainer: Container;
  containers: Container[];
  currentView:string = 'info';
  container: Container = {
    Id: "",
    Names: ["basic"],
    Image: "",
    ImageID: "",
    Command: "",
    Created: "",
    Ports: [],
    Labels: {},
    State: "",
    Status: "",
    HostConfig: {},
    NetworkSettings: {},
    Mounts: []
  };
  ngOnInit() {
    this.getContainers();
  }

}
