import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationForUser } from 'src/app/classes/NotificationForUser';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { SekerPerut } from 'src/app/classes/seker-perut';
import { Survey } from 'src/app/classes/survey';
import { NotificationService } from 'src/app/service/notification.service';
import { SurvyService } from 'src/app/service/survy.service';
import { UserService } from 'src/app/service/user.service';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';
import { EnterceSurveyComponent } from '../enterce-survey/enterce-survey.component';

@Component({
  selector: 'app-survy',
  templateUrl: './survy.component.html',
  styleUrls: ['./survy.component.scss']
})
export class SurvyComponent implements OnInit {
  userNotification:NotificationForUser= new NotificationForUser();
  survey: SekerCotert[];
  permission = this.userService.user.permission;
  countAnswer:number;
  surveyPerut:SekerPerut[];

  constructor(public dialog: MatDialog, private survyServise: SurvyService, private userService: UserService,
    private router: Router,private notificationServise:NotificationService) { }

  ngOnInit(): void {

    this.survyServise.getAllSurvy(this.userService.user.buildingId).subscribe(e => {
      this.survey = e;

      this.surveyPerut=this.survey[0].sekerPeruts;
      console.log(e);
      console.log(this.survey);


    });


  }
  resultSurvey(event, s):void{

    this.surveyPerut=s.surveyPerut;
    // console.log(event);
    // console.log(this.survey);

  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  changeStatus(event, s) {
    if(s.status==true)
    {
      this.userNotification.userId = this.userService.user.buildingId;
      this.userNotification.message =  "נסגר "+s.subject+" הסקר ";
      this.notificationServise.SendPaymentNotification(this.userNotification).subscribe(x => {
        alert("Close")
      });
    }
       else
   {
    this.userNotification.userId = this.userService.user.buildingId;
    this.userNotification.message = "נפתח "+s.subject+" הסקר ";;
    this.notificationServise.SendPaymentNotification(this.userNotification).subscribe(x => {
      alert("Open")
    });
   }
    s.status = !s.status;
    
    this.survyServise.changeStatusSurvy(s).subscribe(r => console.log(r));


  }
  // activeSurvy: boolean=false; 
  // clickEvent(event, s) {
  //   // this.activeSurvy==s.status;
  //   // this.activeSurvy = !this.activeSurvy;
  //   if(s.status==true)
  //   {
  //     this.closeSurvey(event, s);
  //   }
  //   else{
  //     this.closeSurvey(event, s);
  //   }
  // }

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


    this.survyServise.removeSurvey(s).subscribe(x => { alert("OK!") });

  }

  // openSurvey(event, s) {
  //  this.survyServise.changeStatusSurvy(s);
  //    //alert("now open the surevy");
  // }

  // closeSurvey(event, s) {
  //   alert("now close the surevy");
  // }

  openSurvey(event, s) {
    alert("now open the surevy");
  }
  closeSurvey(event, s) {
    alert("now close the surevy");
  }

  enterceSurvey(event, s) {
    if (s.status == true) {
      // this.router.navigate(['/answerSurvey/'])


      this.dialog.open(EnterceSurveyComponent, {
        width: '600px',
        height: '700px',
        data: { survey: s }
      });




    }
    else {
      alert("לא ניתן להיכנס לסקר, הסקר אינו פעיל כעת!");
    }
  }

}
