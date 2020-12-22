import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { Fault } from 'src/app/classes/fault';
import { Tenant } from 'src/app/classes/tenant';
import { FaultService } from 'src/app/service/fault.service';
import { NotificationService } from 'src/app/service/notification.service';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
import { LogInComponent } from '../log-in/log-in.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';


@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.scss']
})
export class FaultComponent implements OnInit {

  faults: Fault[];
  tenants: Tenant[];
  tenantName: string[] = [];
  constructor(private faultService: FaultService, private userService: UserService, private tenantService: TenantService
    , private notificationService: NotificationService, public dialog: MatDialog) { }

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
              this.tenantName.push(t.first_name+ ''+t.last_name);
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
    this.dialog.open(NotificationDialogComponent ,{
      width: '400px',
      data:{userId:e.user_id}
    });
  
  }

  updateStatus(event, e) {

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

}
