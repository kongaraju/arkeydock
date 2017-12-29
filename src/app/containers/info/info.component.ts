import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class ContainerInfoComponent implements OnInit {
  @Input() selectedContainer;
  @Input() selectedContainerLogs;
  constructor() { }

  ngOnInit() {
  }

}
