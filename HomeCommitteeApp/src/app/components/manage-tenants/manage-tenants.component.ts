import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/classes/tenant';
// import { Tenant } from '../classes/tenant';

@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.scss']
})
export class ManageTenantsComponent implements OnInit {


  tenant_arr: Tenant[] = [
    { id: 1, first_name: "efrat", last_name: "malul", floor: 2, phone: "0548486999", mail: "e8486@gmail.com", type: 1, house_num: 4, building_id: 1 ,password:"vjfh9dfdf"},
    { id: 2, first_name: "yael", last_name: "avraham", floor: 2, phone: "485884", mail: "e8486@gmail.com", type: 0, house_num: 4, building_id: 2,password:"vjfoioidf" },
    { id: 3, first_name: "efdrat", last_name: "fnnnn", floor: 2, phone: "0548486999", mail: "e8486@gmail.com", type: 1, house_num: 4, building_id: 3,password:"vjfhoi99fdf" },

  ]


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  delete(event, t) {
    alert("h");
    for (let tenant of this.tenant_arr) {
      if (tenant.id === t.id) {
        this.tenant_arr.splice(this.tenant_arr.indexOf(tenant), 1);
        break;
      }
    }



  }

}
