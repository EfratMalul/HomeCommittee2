import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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



  formEnrollment = new FormGroup({
    building: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    city: new FormControl(''),
    entrance: new FormControl(''),
    zipCode: new FormControl(''),
    numApartments: new FormControl(''),

  });

  constructor(private buildingService: BuildingService, private router: Router, private baseServise: BaseService) { }
  onSubmit() {

    console.log(this.formEnrollment.invalid)
    if (this.formEnrollment.get("building").value && this.formEnrollment.get("address").value && this.formEnrollment.get("number").value && this.formEnrollment.get("city").value
      && this.formEnrollment.get("entrance").value && this.formEnrollment.get("zipCode").value && this.formEnrollment.get("numApartments").value) {


      let b: Building = new Building();
      b.address = this.formEnrollment.get("address").value;
      b.city = this.formEnrollment.get("city").value;
      b.id = 3;
      b.number = this.formEnrollment.get("number").value;
      b.numApartments = this.formEnrollment.get("numApartments").value;
      b.zipCode == this.formEnrollment.get("zipCode").value;

      console.log(this.formEnrollment.get("building").value);
      this.buildingService.AddBuildung(b).subscribe((c) => {
        this.router.navigate(["main/tenantEnrollment",c]);
      });





    }

    else {
      alert("עליך למלא את כל הפרטים!")
    }



    //   Building b=new Building((this.formEnrollment.get("building").value))
    // this.buildingService.AddBuildung(new Building(this.formEnrollment.get("building").value,this.formEnrollment.get("building").value,this.formEnrollment.get("building").value)
    // this.formEnrollment.get("building").value,this.formEnrollment.get("building").value,,this.formEnrollment.get("building").value,this.formEnrollment.get("building").value)
  }
  ngOnInit(): void { }





}
