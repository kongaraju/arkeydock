import { Component, OnInit, Input } from '@angular/core';
import {Utils} from '../../../utils';

@Component({
  selector: 'container-settings-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class ContainerSettingsGeneralComponent extends Utils implements OnInit {
  @Input() selectedContainerInfo;
  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
