import { Component, OnInit, Input } from '@angular/core';
import {Utils} from '../../../utils';

@Component({
  selector: 'container-info-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class ContainerInfoLogsComponent extends Utils implements OnInit {
  @Input() selectedContainerLogs;
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
