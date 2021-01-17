import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tenant } from 'src/app/classes/tenant';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html',
  styleUrls: ['./update-tenant.component.scss']
})
export class UpdateTenantComponent implements OnInit {

  tenant: Tenant;
  newTenant: Tenant = new Tenant();

  formTenant = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mail: new FormControl(''),
      floor: new FormControl(''),
      houseNum: new FormControl(''),
      phone: new FormControl(''),

    });

  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<UpdateTenantComponent>,
    private tenantService: TenantService) {

    this.tenant = data.tenant;
    console.log(this.tenant);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onSubmit() {
   if((<HTMLInputElement>document.getElementById('inputEmail1')).value=="")
   this.newTenant.first_name = this.tenant.first_name;
   else
   this.newTenant.first_name = this.formTenant.get("firstName").value;

   if((<HTMLInputElement>document.getElementById('inputEmail2')).value=="")
   this.newTenant.last_name = this.tenant.last_name;
   else
   this.newTenant.last_name = this.formTenant.get("last_name").value;

   if((<HTMLInputElement>document.getElementById('inputEmail3')).value=="")
   this.newTenant.mail = this.tenant.mail;
   else
   this.newTenant.mail = this.formTenant.get("mail").value;

   if((<HTMLInputElement>document.getElementById('inputEmail4')).value=="")
   this.newTenant.floor = this.tenant.floor;
   else
   this.newTenant.floor = this.formTenant.get("floor").value;

   if((<HTMLInputElement>document.getElementById('inputEmail5')).value=="")
   this.newTenant.house_num = this.tenant.house_num;
   else
   this.newTenant.house_num = this.formTenant.get("houseNum").value;

   if((<HTMLInputElement>document.getElementById('inputEmail6')).value=="")
   this.newTenant.phone = this.tenant.phone;
   else
   this.newTenant.phone = this.formTenant.get("phone").value;

    this.newTenant.user_id = this.tenant.user_id;
    // this.newTenant.first_name = this.formTenant.get("firstName").value;
    // this.newTenant.last_name = this.formTenant.get("lastName").value;
    // this.newTenant.floor = this.formTenant.get("floor").value;
    // this.newTenant.phone = this.formTenant.get("phone").value;
    // this.newTenant.mail = this.formTenant.get("mail").value;
    this.newTenant.type = this.tenant.type;
    // this.newTenant.house_num = this.formTenant.get("houseNum").value;
    this.newTenant.id = this.tenant.id;
    this.newTenant.building_id = this.tenant.building_id;
    this.tenantService.updateTenantDetails(this.newTenant).subscribe(x => {
      this.onNoClick();
      alert("  עודכן בהצלחה!")
      this.tenantService.isUpdateUser.next(true);

    })
  }


}
