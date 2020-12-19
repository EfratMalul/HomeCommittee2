import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { Survey } from 'src/app/classes/survey';
import { SurvyService } from 'src/app/service/survy.service';
import { UserService } from 'src/app/service/user.service';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';

@Component({
  selector: 'app-survy',
  templateUrl: './survy.component.html',
  styleUrls: ['./survy.component.scss']
})
export class SurvyComponent implements OnInit {
  survey: SekerCotert[];

  constructor(public dialog: MatDialog, private survyServise: SurvyService, private userService: UserService) { }

  ngOnInit(): void {

    // this.survyServise.getSurvy(this.userService.user.buildingId).subscribe(e => {
    //   this.survey = e;
    // });

  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
