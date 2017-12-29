import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container-settings-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class ContainerSettingsVolumesComponent implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { }

  ngOnInit() {
  }

}
