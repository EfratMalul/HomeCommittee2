import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { SekerPerut } from 'src/app/classes/seker-perut';
import { SurvyService } from 'src/app/service/survy.service';
import { UserService } from 'src/app/service/user.service';
import { SurvyComponent } from '../survy/survy.component';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {
  sekerCotert: SekerCotert;
  sekerPeruts: Array<SekerPerut> = [];
  count: number = 2;
  formSurvey = new FormGroup({
    subject: new FormControl(''),
    quession: new FormControl(''),
    ansswer1: new FormControl(''),
    ansswer2: new FormControl(''),
    ansswer3: new FormControl(''),
    ansswer4: new FormControl(''),
    ansswer5: new FormControl(''),
  });
  constructor(private survyService: SurvyService, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
  }
  openDialog() {
    // this.dialog.open("ddd");
  }
  addOption() {
    if (this.count < 5)
      this.count++;
    else {
      alert("לא ניתן להוסיף יותר מ5  אפשרויות")
      // this.openDialog();
    }

  }

  addQuession() {
    let s = new SekerPerut()
    s.questionSubject = this.formSurvey.get("quession").value;
    s.extrnalChar1 = this.formSurvey.get("ansswer1").value;
    s.extrnalChar2 = this.formSurvey.get("ansswer2").value;
    s.extrnalChar3 = this.formSurvey.get("ansswer3").value;
    s.extrnalChar4 = this.formSurvey.get("ansswer4").value;
    s.extrnalChar5 = this.formSurvey.get("ansswer5").value;
    s.extrnalNum1 = 1;
    s.extrnalNum2 = 2;
    s.extrnalNum3 = 3;
    s.extrnalNum4 = 4;
    s.extrnalNum5 = 5;
    s.extrnalCount1 = 0;
    s.extrnalCount2 = 0;
    s.extrnalCount3 = 0;
    s.extrnalCount4 = 0;
    s.extrnalCount5 = 0;
    s.extrnalCount1 = 0
    this.sekerPeruts.push(s);
    this.formSurvey.get("quession").reset();
    this.formSurvey.get("ansswer1").reset();
    this.formSurvey.get("ansswer2").reset();
    this.formSurvey.get("ansswer3").reset();
    this.formSurvey.get("ansswer4").reset();
    this.formSurvey.get("ansswer5").reset();
  }
  createSurvy() {
    console.log(this.formSurvey.value);
    // this.survyService.addNewSurvey(this.formSurvey.get('quession').value, this.formSurvey.get('ansswer1').value,
    // this.formSurvey.get('ansswer2').value).
    // subscribe()
    this.sekerCotert = new SekerCotert();
    this.sekerCotert.BuildingId = this.userService.user.buildingId;
    this.sekerCotert.countAnswers = 0;
    this.sekerCotert.createDate = new Date();
    this.addQuession();
    //not working
    this.sekerCotert.sekerPeruts = this.sekerPeruts;

    //   questionSubject: this.formSurvey.get("quession").value,
    //   extrnalChar1: this.formSurvey.get("ansswer1").value,
    //   extrnalChar2: this.formSurvey.get("ansswer2").value,
    //   extrnalChar3: this.formSurvey.get("ansswer3").value,
    //   extrnalChar4: this.formSurvey.get("ansswer4").value,
    //   extrnalChar5: this.formSurvey.get("ansswer5").value,
    //   extrnalCount1: 0, extrnalCount2: 0, extrnalCount3: 0, extrnalCount4: 0, extrnalCount5: 0,
    //   extrnalNum1: 1, extrnalNum2: 2, extrnalNum3: 3, extrnalNum4: 4, extrnalNum5: 5
    // }];
    this.sekerCotert.status = false;
    this.sekerCotert.subject = this.formSurvey.get("subject").value;
    this.survyService.addNewSurvey(this.sekerCotert).subscribe((x => {
      console.log(this.sekerCotert);
      alert("האוביקט נוסף בהצלחה");

    }));
  }
}