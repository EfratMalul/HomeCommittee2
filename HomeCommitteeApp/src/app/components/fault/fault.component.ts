import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { Fault } from 'src/app/classes/fault';
import { Tenant } from 'src/app/classes/tenant';
import { FaultService } from 'src/app/service/fault.service';
import { NotificationService } from 'src/app/service/notification.service';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
import { LogInComponent } from '../log-in/log-in.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.scss']
})
export class FaultComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  faults: Fault[];
  tenants: Tenant[];
  tenantName: string[] = [];
  constructor(private faultService: FaultService, private userService: UserService, private tenantService: TenantService
    , private notificationService: NotificationService, public dialog: MatDialog) {

      this.faultService.isUpdateStatus.subscribe((success) => {

        this.faultService.getAllFault(this.userService.user.buildingId).subscribe(x=>{  
        this.faults=x;
        })
  
  
  })


     }

    permission= this.userService.user.permission;

  ngOnInit(): void {

    forkJoin({
      res1: this.faultService.getAllFault(this.userService.user.buildingId),
      res2: this.tenantService.GetAllTenantByBuildingId(this.userService.user.buildingId)
    })
      .subscribe(({ res1, res2 }) => {
        this.faults = res1;
        this.tenants = res2;
        console.log(this.tenants);

        this.faults.forEach(f => {
          this.tenants.forEach(t => {
            if (f.user_id == t.user_id) {
              this.tenantName.push(t.first_name + '' + t.last_name);
            }
          });
        });

        console.log(this.tenantName);
      });

    // this.faultService.getAllFault(this.userService.user.buildingId).subscribe(f=>this.faults=f);

    // this.tenantService.getAllTenantByUserId(this.userService.user.buildingId).subscribe((tenant =>
    //   {
    //  console.log(tenant);
    //  this.tenants =tenant; 
    // }));


  }
  sendNotification(event, e) {
    this.dialog.open(NotificationDialogComponent, {
      width: '400px',
      data: { userId: e.user_id }
    });

  }

  
  updateStatus(event, e) {
    if (e.status == false) {
      let fault: Fault = new Fault();
      fault.id = e.id;
      fault.description = e.description;
      fault.building_id = e.building_id;
      fault.status = true;
      fault.user_id = e.user_id;

      this.faultService.updateStatus(fault).subscribe((e => {
        console.log(e);

      }));

    }
    else {
      alert(' "התקלה כבר עודכנה ל -"טופל')
    }
  }
}
