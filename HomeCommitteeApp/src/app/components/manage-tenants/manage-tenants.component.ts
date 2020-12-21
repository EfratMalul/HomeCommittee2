import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/classes/tenant';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
// import { Tenant } from '../classes/tenant';

@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.scss']
})
export class ManageTenantsComponent implements OnInit {

  tenant_arr:Tenant[];
  myserch: any = '';
  constructor(private router:Router,private tenantService:TenantService,private userService:UserService) { }

  ngOnInit(): void {
    this.tenantService.GetAllTenantByBuildingId(this.userService.user.buildingId).subscribe( t=>{
     this.tenant_arr=t;
    });
  }
 


  }

