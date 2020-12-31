import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { SekerPerut } from 'src/app/classes/seker-perut';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-enterce-survey',
  templateUrl: './enterce-survey.component.html',
  styleUrls: ['./enterce-survey.component.scss']
})
export class EnterceSurveyComponent implements OnInit {
  survey: SekerCotert;
  sekerPeruts: Array<SekerPerut> = [];
  countOfAnswer: number[] = [0];
  externalChar: string;
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<EnterceSurveyComponent>) {
    this.survey = data.survey;
  }



  ngOnInit(): void {
   
    this.sekerPeruts = this.survey.sekerPeruts;
    for (var i = 0; i < this.sekerPeruts.length; i++) this.countOfAnswer[i] = 0;
    for (let index = 0; index < this.sekerPeruts.length; index++) {
      if (this.sekerPeruts[index].extrnalChar1 != ""&&this.sekerPeruts[index].extrnalChar1 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar2 != ""&&this.sekerPeruts[index].extrnalChar2 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar3 != ""&&this.sekerPeruts[index].extrnalChar3 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar4 != ""&&this.sekerPeruts[index].extrnalChar4 != null)
        this.countOfAnswer[index]++;
      if (this.sekerPeruts[index].extrnalChar5 != ""&&this.sekerPeruts[index].extrnalChar5 != null)
        this.countOfAnswer[index]++;

    }
console.log(this.countOfAnswer);
  }
  onNoClick(): void {
    this.dialogRef.close();
    // this.formAddExpenditure.reset({ value: "" });
  }


}
