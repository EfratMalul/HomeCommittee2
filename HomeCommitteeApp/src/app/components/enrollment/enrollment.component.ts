import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Building } from 'src/app/classes/building';

import { BaseService } from 'src/app/service/base.service';
import { BuildingService } from 'src/app/service/building.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  // @ViewChild('stepper') stepper;

  numApartments: number;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;


  formEnrollment = new FormGroup({
    building: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    city: new FormControl(''),
    entrance: new FormControl(''),
    zipCode: new FormControl(''),
    numApartments: new FormControl(''),

  });
  stepper: MatStepper;
  constructor(private buildingService: BuildingService, private router: Router, private baseServise: BaseService,
    private _formBuilder: FormBuilder) { }


  public onStepChange(event: any): void
   {
    switch (event.previouslySelectedIndex) {
      case 0:
        if (event.selectedIndex = event.previouslySelectedIndex + 1)
          alert("save 0")
          // let b: Building = new Building();
          //     b.address = this.formEnrollment.get("address").value;
          //     b.city = this.formEnrollment.get("city").value;
          //     b.id = 3;
          //     b.number = this.formEnrollment.get("number").value;
          //     b.numApartments = this.formEnrollment.get("numApartments").value;
          //     b.zipCode == this.formEnrollment.get("zipCode").value;
        
          //     console.log(this.formEnrollment.get("building").value);
          //     this.buildingService.AddBuildung(b).subscribe((c) => {
          //       // this.router.navigate(["main/tenantEnrollment",c]);
          //       // this.stepper.next();       
          //     });
        break;
      case 1:
        if (event.selectedIndex = event.previouslySelectedIndex + 1)
          alert("save 1")
        break;
    }
    console.log(event.selectedIndex);
   }
  //  
  onSubmit() {
   
    console.log(this.formEnrollment.invalid)
    // if (this.formEnrollment.get("building").value && this.formEnrollment.get("address").value && this.formEnrollment.get("number").value && this.formEnrollment.get("city").value
    //   && this.formEnrollment.get("entrance").value && this.formEnrollment.get("zipCode").value && this.formEnrollment.get("numApartments").value) {

  // public onStepChange(event: any): void {

  //   //next
  //   if (event.selectedIndex == event.previouslySelectedIndex + 1) {
  //     //add building
  //     if (event.selectedIndex == 1) {
  //       alert(" click next first");
  //       // let b: Building = new Building();
  //       //     b.address = this.formEnrollment.get("address").value;
  //       //     b.city = this.formEnrollment.get("city").value;
  //       //     b.id = 3;
  //       //     b.number = this.formEnrollment.get("number").value;
  //       //     b.numApartments = this.formEnrollment.get("numApartments").value;
  //       //     b.zipCode == this.formEnrollment.get("zipCode").value;
  //       //     console.log(this.formEnrollment.get("building").value);
  //       // this.numApartments=this.formEnrollment.get("numApartments").value;
  //       //     this.buildingService.AddBuildung(b).subscribe((c) => {
  //       //       // this.router.navigate(["main/tenantEnrollment",c]);
  //       //       // this.stepper.next();       
  //       //     });
  //     }
  //     //send mail for the tenant
  //     else
  //       alert(" click next second");
  //   }

  //   //back
  //   if (event.selectedIndex == event.previouslySelectedIndex - 1)
  //     alert(" click back");


  //   // switch (event.previouslySelectedIndex) {
  //   //   case 0:
  //   //     if (event.selectedIndex = event.previouslySelectedIndex + 1)
  //   // alert("save 0")
  //   // let b: Building = new Building();
  //   //     b.address = this.formEnrollment.get("address").value;
  //   //     b.city = this.formEnrollment.get("city").value;
  //   //     b.id = 3;
  //   //     b.number = this.formEnrollment.get("number").value;
  //   //     b.numApartments = this.formEnrollment.get("numApartments").value;
  //   //     b.zipCode == this.formEnrollment.get("zipCode").value;

  //   //     console.log(this.formEnrollment.get("building").value);
  //   //     this.buildingService.AddBuildung(b).subscribe((c) => {
  //   //       // this.router.navigate(["main/tenantEnrollment",c]);
  //   //       // this.stepper.next();       
  //   //     });
  //   //   break;
  //   // case 1:
  //   //   if (event.selectedIndex = event.previouslySelectedIndex + 1)
  //   //     alert("save 1")
  //   //   break;
  //   // }
  //   // console.log(event.selectedIndex);
  // }

  // onSubmit(stepper: MatStepper) {

  //   console.log(this.formEnrollment.invalid)
  //   if (this.formEnrollment.get("building").value && this.formEnrollment.get("address").value && this.formEnrollment.get("number").value && this.formEnrollment.get("city").value
  //     && this.formEnrollment.get("entrance").value && this.formEnrollment.get("zipCode").value && this.formEnrollment.get("numApartments").value) {






      let b: Building = new Building();
      b.address = this.formEnrollment.get("address").value;
      b.city = this.formEnrollment.get("city").value;
      b.id = 3;
      b.number = this.formEnrollment.get("number").value;
      b.numApartments = this.formEnrollment.get("numApartments").value;
      b.zipCode == this.formEnrollment.get("zipCode").value;

      console.log(this.formEnrollment.get("building").value);
      this.buildingService.AddBuildung(b).subscribe((c) => {
        // this.router.navigate(["main/tenantEnrollment",c]);
        // this.stepper.next();
        this.stepper.next();

      });

    // }

    // else {
    //   alert("עליך למלא את כל הפרטים!")
    // }

  }

  //   //   Building b=new Building((this.formEnrollment.get("building").value))
  //   // this.buildingService.AddBuildung(new Building(this.formEnrollment.get("building").value,this.formEnrollment.get("building").value,this.formEnrollment.get("building").value)
  //   // this.formEnrollment.get("building").value,this.formEnrollment.get("building").value,,this.formEnrollment.get("building").value,this.formEnrollment.get("building").value)
  // }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}







