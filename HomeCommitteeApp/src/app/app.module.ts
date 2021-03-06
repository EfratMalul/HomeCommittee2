import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';


import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';

import { CommitteeHomeComponent } from './components/committee-home/committee-home.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FaultComponent } from './components/fault/fault.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { SearchPipe } from './search.pipe';
import { MaimComponent } from './components/maim/maim.component';
import { TenantEnrollmentComponent } from './components/tenant-enrollment/tenant-enrollment.component';
import { ManageTenantsComponent } from './components/manage-tenants/manage-tenants.component';
import { InformitionComponent } from './components/informition/informition.component';
import { SurvyComponent } from './components/survy/survy.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { ChatTenantComponent } from './components/chat-tenant/chat-tenant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AddExpenditureComponent } from './components/add-expenditure/add-expenditure.component';
import { PayExpenditureComponent } from './components/pay-expenditure/pay-expenditure.component';
import { MainExpenditureComponent } from './components/main-expenditure/main-expenditure.component';
import { MainFaultComponent } from './components/main-fault/main-fault.component';
import { AddFaultComponent } from './components/add-fault/add-fault.component';

import { PayCommitteComponent } from './components/pay-committe/pay-committe.component';
import { MainPaymentComponent } from './components/main-payment/main-payment.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeSideNavComponent } from './components/home-side-nav/home-side-nav.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserAreaComponent } from './components/user-area/user-area.component';
import { NotificationComponent } from './components/notification/notification.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { TenantPaymentComponent } from './components/tenant-payment/tenant-payment.component';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';
import { UpdateTenantComponent } from './components/update-tenant/update-tenant.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EnterceSurveyComponent } from './components/enterce-survey/enterce-survey.component';
import { AnswerSurveyComponent } from './components/answer-survey/answer-survey.component';
import {MatRadioModule} from '@angular/material/radio';
import { SendPaymentNotificationComponent } from './components/send-payment-notification/send-payment-notification.component';
import { ChartsModule } from 'ng2-charts';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';

import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    CommitteeHomeComponent,
    ExpenditureComponent,
    PaymentComponent,
    FaultComponent,
    EnrollmentComponent,
    SearchPipe,
    MaimComponent,
    TenantEnrollmentComponent,
    ManageTenantsComponent,
    InformitionComponent,
    SurvyComponent,
    MessageBoardComponent,
    ChatTenantComponent,
    DashboardComponent,
    ReportsComponent,
    AddExpenditureComponent,
    PayExpenditureComponent,
    MainExpenditureComponent,
    MainFaultComponent,
    AddFaultComponent,
  MainPaymentComponent,
    PayCommitteComponent,
    CreateSurveyComponent,
    HomeSideNavComponent,
    UserAreaComponent,
    NotificationComponent,
    TenantPaymentComponent,
    NotificationDialogComponent,
    UpdateTenantComponent,
    EnterceSurveyComponent,
    AnswerSurveyComponent,
    SendPaymentNotificationComponent,
    ChartBarComponent,
    ChartPieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbNavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
    MatTableModule,
    MatRadioModule,
    ChartsModule,
    NgxPayPalModule,
  ],
  providers: [UserService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [
    LogInComponent
  ]
})
export class AppModule { }
