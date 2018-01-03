import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageBoxComponent>, @Inject(MAT_DIALOG_DATA)public data: any){ }

  ngOnInit() {
  }

}
