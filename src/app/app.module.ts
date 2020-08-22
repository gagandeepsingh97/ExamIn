import { SubjectListComponent } from './student/subject-list/subject-list.component';
import { InstructionComponent } from './student/instruction/instruction.component';
import { ReportComponent } from './student/report/report.component';
import { QuestionComponent } from './student/question/question.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddTestComponent } from './admin/admin-add-test/admin-add-test.component';
import { Page3Component } from './admin/page3/page3.component';
import { ChooseLevelComponent } from './admin/choose-level/choose-level.component';
import { ForgotPassComponent } from './admin/forgot-pass/forgot-pass.component';
import { AddQuesSingleComponent } from './admin/add-ques-single/add-ques-single.component';
import { BrowseComponent } from './admin/browse/browse.component';
import { AddQuesComponent } from './admin/add-ques/add-ques.component';
import { Page4Component } from './admin/page4/page4.component';
import { HomeComponent } from './student/home/home.component';
import { LoginPageComponent } from './student/login-page/login-page.component';
import { RegistrationPageComponent } from './student/registration-page/registration-page.component';
import { SelectionPageComponent } from './student/selection-page/selection-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminAddTestComponent,
    Page3Component,
    ChooseLevelComponent,
    ForgotPassComponent,
    AddQuesSingleComponent,
    BrowseComponent,
    Page4Component,
    AddQuesComponent,
    AddQuesSingleComponent,
    HomeComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SelectionPageComponent,
    QuestionComponent,
    ReportComponent,
    InstructionComponent,
    SubjectListComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
