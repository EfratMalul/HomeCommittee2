import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/classes/tenant';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
import { DialogData } from '../maim/maim.component';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  hide = true;

  formLogin = new FormGroup({
    //email : new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl(''),
    password: new FormControl(''),

  });
  email = new FormControl('', [Validators.required, Validators.email]);
  building_id: number;
  constructor(private userService: UserService, private router: Router, private tenantService: TenantService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<LogInComponent>) {


  }
  onSubmit() {

    this.userService.CheckUserAndPermissions(this.formLogin.get('password').value, this.formLogin.get('name').value).
      subscribe((user => {
        if (user.id != -1) {
          // if (user.id != null && user.buildingId != -1 && user.permission != -1) {
            console.log(user);


            // this.tenantService.getTenant(this.userService.user.id).subscribe((tenant =>
            //   {
           
            //  console.log(tenant);
        
            // }));

            // if(user.permission==1)
            let p = user.permission;
            this.router.navigate(['/home/'])
            // this.router.navigate(['/home/',p])
            // alert("yes");

            // //if tenant or committee
            // if(this.tenantService.getType(x).subscribe((type =>
            //    {
            //      if (type==1){
            //      this.router.navigate(['/TenantHome']) } 
            //      else{
            //       this.router.navigate(['/CommitteeHome']) } 

            //      })))
          }
        // }
        else if(user.id==-1) {
          // this.building_id=-1;
          alert("היוזר לא משויך לבניין וללא הרשאות");
        }
        this.onNoClick();
      }));

   
  };

  onNoClick(): void {
    this.dialogRef.close();
    this.formLogin.reset({ value: "" });
  }
  

  getErrorMessage() {
    if ( this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return  this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {

  }
  // forgetPassword():{

    


  // }

}
