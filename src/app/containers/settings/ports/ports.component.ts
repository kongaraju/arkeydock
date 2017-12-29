import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'container-settings-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class ContainerSettingsPortsComponent implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { }

  ngOnInit() {
  }

}
