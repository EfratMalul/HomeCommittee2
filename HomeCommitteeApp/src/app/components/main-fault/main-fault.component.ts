import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { AddFaultComponent } from '../add-fault/add-fault.component';

@Component({
  selector: 'app-main-fault',
  templateUrl: './main-fault.component.html',
  styleUrls: ['./main-fault.component.scss']
})
export class MainFaultComponent implements OnInit {
  active = 1;

  constructor(public dialog: MatDialog, private userServisr:UserService) { }
  permission= this.userServisr.user.permission;
  
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddFaultComponent, {
      width: '500px'
    });
  }
  
}
