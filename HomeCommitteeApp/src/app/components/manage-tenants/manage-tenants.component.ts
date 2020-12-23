import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/classes/tenant';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
import { UpdateTenantComponent } from '../update-tenant/update-tenant.component';
// import { Tenant } from '../classes/tenant';

@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.scss']
})
export class ManageTenantsComponent implements OnInit {

  tenant_arr: Tenant[];
  myserch: any = '';
  constructor(private router: Router, public tenantService: TenantService, private userService: UserService,
    public dialog: MatDialog) {
    this.tenantService.isUpdateUser.subscribe(x => {
      if (x == true) {
        this.tenantService.GetAllTenantByBuildingId(this.userService.user.buildingId).subscribe(t => {
          this.tenant_arr = t;
        });
      }
    });
  }

  ngOnInit(): void {
    this.tenantService.GetAllTenantByBuildingId(this.userService.user.buildingId).subscribe(t => {
      this.tenant_arr = t;
    });
  }
  removeTenant(event, t) {
    this.tenantService.removeTenant(t).subscribe(t => {
      console.log(t);
    });
  }

  updateTenant(event, t) {
    this.dialog.open(UpdateTenantComponent, {
      width: '400px',
      data: { tenant: t }
    });
  }


}

