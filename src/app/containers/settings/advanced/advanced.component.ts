import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container-settings-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class ContainerSettingsAdvancedComponent implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { }

  ngOnInit() {
  }

}
