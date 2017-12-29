import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class ContainerSettingsComponent implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { }

  ngOnInit() {
  }

}
