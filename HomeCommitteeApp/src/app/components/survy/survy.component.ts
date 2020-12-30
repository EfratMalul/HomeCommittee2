import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  permission=this.userService.user.permission;
  constructor(public dialog: MatDialog, private survyServise: SurvyService, private userService: UserService,
    private router: Router) { }
   
  ngOnInit(): void {

    this.survyServise.getAllSurvy(this.userService.user.buildingId).subscribe(e => {
      this.survey = e;
    });


  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  activeSurvy: boolean = false;
  clickEvent(event, s) {
    this.activeSurvy = !this.activeSurvy;
    if (this.activeSurvy == false) {
      this.openSurvey(event, s);
    }
    else {
      this.closeSurvey(event, s);
    }
  }
  removeSurvey(event, s) {

  }
  openSurvey(event, s) {
    alert("now open the surevy");
  }
  closeSurvey(event, s) {
    alert("now close the surevy");
  }
  enterceSurvey(event, s) {
    if (s.status == true) {
      this.router.navigate(['/answerSurvey/'])
    }
    else {
      alert("לא ניתן להיכנס לסקר, הסקר אינו פעיל כעת!");
    }
  }

}
