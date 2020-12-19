import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';
import { Tenant } from 'src/app/classes/tenant';
import { TenantService } from 'src/app/service/tenant.service';
// import { TenantHomeComponent } from '../tenant-home/tenant-home.component';

@Component({
  selector: 'app-tenant-enrollment',
  templateUrl: './tenant-enrollment.component.html',
  styleUrls: ['./tenant-enrollment.component.scss']
})
export class TenantEnrollmentComponent implements OnInit {





  formEnrollment = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    floor: new FormControl(''),
    phone: new FormControl(''),
    mail: new FormControl(''),
    type: new FormControl(''),
    house_num: new FormControl(''),
    password:new FormControl(''),
  });


  tenant: Tenant;
  constructor(private baseServise: BaseService, private router: Router, private route: ActivatedRoute,private tenantServise:TenantService) { }
  onSubmit() {

    if (this.formEnrollment.get("first_name").value && this.formEnrollment.get("last_name").value && this.formEnrollment.get("floor").value && this.formEnrollment.get("phone").value
      && this.formEnrollment.get("mail").value && this.formEnrollment.get("type").value&&this.formEnrollment.get("house_num").value) {
      alert("נרשמת בהצלחה")
      //TODO
      //this.baseServise.postData('Post', this.formEnrollment.value);
       let t:Tenant=new Tenant();
      t.first_name=this.formEnrollment.get("first_name").value;

      t.last_name=this.formEnrollment.get("last_name").value
      t.floor=this.formEnrollment.get("floor").value;
      t.phone=this.formEnrollment.get("phone").value;
      t.mail=this.formEnrollment.get("mail").value;
      t.type=this.formEnrollment.get("type").value;
      t.house_num=this.formEnrollment.get("house_num").value;
      t.building_id = parseInt(this.route.snapshot.paramMap.get('id'));
      t.password=this.formEnrollment.get("password").value;


      this.tenantServise.AddTenant(t).subscribe((c)=>{
        console.log("yes");
      });


      // this.router.navigate(['/TenantEnrollment'])
    }

    else {
      alert("עליך למלא את כל הפרטים!")
    }
    



  }
  ngOnInit(): void {

    // this.id = this.route.params.subscribe(params => {
    //  this.id = + params['id'];  });
    // this.id = +params['id'];  });
    // this.route.params.subscribe( params => console.log(params));
    var id = this.route.snapshot.paramMap.get('id');
    alert(id);
      
  }

}
