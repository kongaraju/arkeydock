import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container-settings-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class ContainerSettingsNetworkComponent implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { }

  ngOnInit() {
  }

}
