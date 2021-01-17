import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';
import { AddExpenditureComponent } from '../add-expenditure/add-expenditure.component';

@Component({
  selector: 'app-main-expenditure',
  templateUrl: './main-expenditure.component.html',
  styleUrls: ['./main-expenditure.component.scss']
})
export class MainExpenditureComponent implements OnInit {
  active = 1;
  constructor(public dialog: MatDialog, private userServisr:UserService) { }

  permission= this.userServisr.user.permission;

  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(AddExpenditureComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
