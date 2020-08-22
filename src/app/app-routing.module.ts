import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddTestComponent } from './admin/admin-add-test/admin-add-test.component';
import { Page3Component } from './admin/page3/page3.component';
import { Page4Component } from './admin/page4/page4.component';
import { ChooseLevelComponent } from './admin/choose-level/choose-level.component';
import { ForgotPassComponent } from './admin/forgot-pass/forgot-pass.component';
import { BrowseComponent } from './admin/browse/browse.component';
import { AddQuesComponent } from './admin/add-ques/add-ques.component';
import { AddQuesSingleComponent } from './admin/add-ques-single/add-ques-single.component';

const routes: Routes = [
  // {path: '', redirectTo:'/admin-login', pathMatch:'full'},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-add-test', component: AdminAddTestComponent},
  {path: 'page3', component:Page3Component},
  {path:'page4', component: Page4Component},
  {path:'choose-level', component: ChooseLevelComponent},
  {path:'forgot-pass', component: ForgotPassComponent},
{path:'browse', component:BrowseComponent},
{path:'add-ques', component: AddQuesComponent},
{path:'add-ques-single', component: AddQuesSingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
