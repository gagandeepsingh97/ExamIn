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
    AddQuesSingleComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
