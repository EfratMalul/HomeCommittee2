import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogInComponent } from '../log-in/log-in.component';

export interface DialogData {

}

@Component({
  selector: 'app-maim',
  templateUrl: './maim.component.html',
  styleUrls: ['./maim.component.scss']
})
export class MaimComponent implements OnInit {
  active = 1;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LogInComponent, {
      width: '400px'
    });
  }

}
