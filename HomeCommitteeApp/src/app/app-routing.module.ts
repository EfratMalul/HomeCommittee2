import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformitionComponent } from './components/informition/informition.component';
import { MaimComponent } from './components/maim/maim.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { FaultComponent } from './components/fault/fault.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ManageTenantsComponent } from './components/manage-tenants/manage-tenants.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TenantEnrollmentComponent } from './components/tenant-enrollment/tenant-enrollment.component';
// import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatTenantComponent } from './components/chat-tenant/chat-tenant.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { Survey } from './classes/survey';
import { ReportsComponent } from './components/reports/reports.component';
import { AddExpenditureComponent } from './components/add-expenditure/add-expenditure.component';
import { PayExpenditureComponent } from './components/pay-expenditure/pay-expenditure.component';
import { MainExpenditureComponent } from './components/main-expenditure/main-expenditure.component';
import { AddFaultComponent } from './components/add-fault/add-fault.component';
import { MainFaultComponent } from './components/main-fault/main-fault.component';
import { MainPaymentComponent } from './components/main-payment/main-payment.component';
import { PayCommitteComponent } from './components/pay-committe/pay-committe.component';
import { SurvyComponent } from './components/survy/survy.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { UserAreaComponent } from './components/user-area/user-area.component';
import { TenantPaymentComponent } from './components/tenant-payment/tenant-payment.component';
import { AnswerSurveyComponent } from './components/answer-survey/answer-survey.component';
import { PaymentForMonthComponent } from './components/payment-for-month/payment-for-month.component';

const routes: Routes = [
  {
    path: 'main',
    component: MaimComponent,
    

    children: [
      {
        path: 'logIn',
        component: LogInComponent
        
      },
      {
        path: 'enrollment',
        component: EnrollmentComponent
      },
      {
        path:'informition',
        component:InformitionComponent
      }
      ,{
        path:'tenantEnrollment/:id',
        component:TenantEnrollmentComponent
      }
      // ,{
      //   path:'TenantEnrollment/:id',
      //   component:TenantEnrollmentComponent
      // }
     
    ]
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'mainFault', component: MainFaultComponent,
      children:[
        {path:'fault',component:FaultComponent},
        {path:'addFault',component:AddFaultComponent}]
    
          },
      { path: 'mainPayment', component: MainPaymentComponent,
      children:[
        {path:'payment',component:PaymentComponent},
        {path:'payCommittee',component:PayCommitteComponent},
        {path:'tenantPayment',component:TenantPaymentComponent},
      {path:'paymentForMonth',component:PaymentForMonthComponent}
      
      ]
       },
      { path: 'mainExpenditure', component: MainExpenditureComponent , 
       children:[
        {path:'expenditure',component:ExpenditureComponent},
        {path:'addExpenditure',component:AddExpenditureComponent},
        {path:'payExpenditure',component:PayExpenditureComponent}]},
      {path:'manageTenant',component:ManageTenantsComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'chatTenant',component:ChatTenantComponent},
      {path:'messageBoard',component:MessageBoardComponent},
      {path:'survey',component:SurvyComponent},
      {path:'reports',component:ReportsComponent},
    ],
  },
  {path:'answerSurvey',
  component:AnswerSurveyComponent

  },
  {
    path: "home/mainFault/fault",
    component: FaultComponent
  },
  {path:"userArea",component:UserAreaComponent},
 
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];


// const routes: Routes = [

//   {
//     path: 'logIn',
//     component: LogInComponent
//   },
//   {
//     path: 'enrollment',
//     component: EnrollmentComponent
//   },
//   {
//     path: 'TenantHome',
//     component: TenantHomeComponent
//   },


//   { path: 'TenantHome/fault', component: FaultComponent },



//   { path: 'TenantHome/payment', component: PaymentComponent },

//   { path: 'TenantHome/expenditure', component: ExpenditureComponent },
//   {
//     path: '',
//     component: HomeComponent


//   }


// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
