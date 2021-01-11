import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { SekerPerut } from 'src/app/classes/seker-perut';
import { SurvyService } from 'src/app/service/survy.service';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-enterce-survey',
  templateUrl: './enterce-survey.component.html',
  styleUrls: ['./enterce-survey.component.scss']
})
export class EnterceSurveyComponent implements OnInit {
  mone: number = 0;
  survey: SekerCotert;
  sekerPeruts: Array<SekerPerut> = [];
  sekerPerut: SekerPerut;
  countOfAnswer: number[] = [0];
  externalChar: string;
 answer: string;
  formAnswer = new FormGroup({
    answer: new FormControl('')
  })
  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<EnterceSurveyComponent>, private surveyService: SurvyService) {
    this.survey = data.survey;
  }



  ngOnInit(): void {

    this.sekerPeruts = this.survey.sekerPeruts;
    for (var i = 0; i < this.sekerPeruts.length; i++) this.countOfAnswer[i] = 0;
    for (let index = 0; index < this.sekerPeruts.length; index++) {
      if (this.sekerPeruts[index].extrnalChar1 != "" && this.sekerPeruts[index].extrnalChar1 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar2 != "" && this.sekerPeruts[index].extrnalChar2 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar3 != "" && this.sekerPeruts[index].extrnalChar3 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar4 != "" && this.sekerPeruts[index].extrnalChar4 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar5 != "" && this.sekerPeruts[index].extrnalChar5 != null)
        this.countOfAnswer[index]++;

    }
    console.log(this.countOfAnswer);
    this.nextQuestion();
  }
  onNoClick(): void {
    this.dialogRef.close();
    // this.formAddExpenditure.reset({ value: "" });
  }
  nextQuestion() {
    if (this.mone <= this.sekerPeruts.length) {
      if (this.mone != 0) {
        alert(this.formAnswer.get("answer").value);
        switch (this.formAnswer.get("answer").value) {
          case 1: {
            this.sekerPeruts[this.mone-1].extrnalCount1++;
            break;
          }
          case 2: {
            this.sekerPeruts[this.mone-1].extrnalCount2++;
            break;
          }
          case 3: {
            this.sekerPeruts[this.mone-1].extrnalCount3++;
            break;
          }
          case 4: {
            this.sekerPeruts[this.mone-1].extrnalCount4++;
            break;
          }
          case 5: {
            this.sekerPeruts[this.mone-1].extrnalCount5++;
            break;
          }
        }

        this.surveyService.updateCountAnswer(this.sekerPeruts[this.mone-1]).subscribe(x => { alert("update!") });
        
      }
      this.sekerPerut = this.sekerPeruts[this.mone++];





    }

    else {
      alert("finish!!!!!!!");
    }
  }

}
