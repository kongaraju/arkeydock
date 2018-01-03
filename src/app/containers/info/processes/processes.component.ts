import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MessageBoxComponent} from '../../../dialogs/message-box/message-box.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DockerContainerService } from '../../docker.container.service';

@Component({
  selector: 'container-info-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ContainerInfoProcessesComponent implements OnInit {
  @Input() selectedContainer;
  constructor(private dockerContainerService: DockerContainerService, public dialog: MatDialog) { }
  displayedColumns = ["PID", "USER", "TIME", "COMMAND"];//["UID", "PID", "PPID", "C", "STIME", "TTY", "TIME", "CMD"];
  dataSource: any;
  ngOnInit() {
    this.getProcesses();
  }
  ngOnChanges(changes) {
    if (changes.selectedContainer.currentValue && changes.selectedContainer.firstChange) {
      return;
    } else if (changes.selectedContainer.currentValue) {
      this.getProcesses();
    }
  }
  getProcesses() {

    if(this.selectedContainer.State != "running") return;
    this.dockerContainerService.getContainerProcesses(this.selectedContainer.Id).subscribe((processes) => {
      
      this.dataSource = new MatTableDataSource(this.toTable(processes));
      //this.dataSource.data = this.toTable(processes);
      //this.displayedColumns = processes.Titles;
    }, (errResp) => {
      //alert(errResp.statusText);

      let dialogRef = this.dialog.open(MessageBoxComponent, {
        width: '450px',      
        data: { title: errResp.statusText, message: errResp.error.message }
      });
    });
  }
  toTable(data) {
    let processesTable = [];
    
    for (let i = 0; i < data.Processes.length; i++) {
      let row = {};
      for (let j = 0; j < data.Processes[i].length; j++) {     
        row[data.Titles[j]] = data.Processes[i][j];      
      }
      processesTable.push(row);
    }
    return processesTable;
  }

}

export interface Process {
  PID: string;
  USER: string;
  TIME: string;
  COMMAND: string;
}

