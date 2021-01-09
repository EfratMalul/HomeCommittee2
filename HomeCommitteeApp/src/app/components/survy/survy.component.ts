import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SekerCotert } from 'src/app/classes/seker-cotert';
import { Survey } from 'src/app/classes/survey';
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

  survey: SekerCotert[];
  permission=this.userService.user.permission;

  constructor(public dialog: MatDialog, private survyServise: SurvyService, private userService: UserService,
    private router: Router) { }
   
  ngOnInit(): void {

    this.survyServise.getAllSurvy(this.userService.user.buildingId).subscribe(e => {
      this.survey = e;

      console.log(e);
      console.log(this.survey);

    });


  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateSurveyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


   changeStatus(event, s){
      if(s.status=="true"){
        event.innerHtml="סגור סקר"
        s.status="false";
      }
      else{
        event.innerHtml="פתח סקר"
        s.status=="true"
      }
      this.survyServise.changeStatusSurvy(s).subscribe(r=>console.log(r));
   
     
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


    // this.survyServise.removeSurvey(s);

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
        height:'700px',
        data: { survey: s }
      });
     
 
  

    }
    else {
      alert("לא ניתן להיכנס לסקר, הסקר אינו פעיל כעת!");
    }
  }

}
